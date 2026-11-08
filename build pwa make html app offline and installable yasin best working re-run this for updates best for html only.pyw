import os
import sys
import re
import json
import hashlib
import time
import ctypes

try:
    from PIL import Image
    HAS_PIL = True
except Exception:
    HAS_PIL = False

SOURCE_LOGO_PATH = r"C:\Users\Yasin\Downloads\Yasin Soft\logo.png"
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
VERSION = "2.0.0"

EXCLUDE_DIRS = {".git", "__pycache__", ".vscode", ".idea", ".gemini", "node_modules"}
EXCLUDE_EXTS = {".py", ".pyw", ".pyc", ".txt", ".md", ".log", ".bak", ".zip", ".gz", ".tar"}
EXCLUDE_NAMES = {
    "sw.js",
    ".gitattributes",
    "update_pwa.py",
    os.path.basename(__file__)
}

def log(msg):
    try:
        print(msg)
    except Exception:
        pass

def get_file_hash(path):
    hasher = hashlib.md5()
    try:
        with open(path, "rb") as f:
            while chunk := f.read(65536):
                hasher.update(chunk)
        return hasher.hexdigest()
    except Exception as e:
        log(f"Hash error on {os.path.basename(path)}: {e}")
        return None

def find_source_logo():
    candidates = [
        os.path.join(PROJECT_DIR, "logo.png"),
        os.path.join(PROJECT_DIR, "icon-512.png"),
        os.path.join(PROJECT_DIR, "icon-192.png"),
        os.path.join(PROJECT_DIR, "icon.png"),
        SOURCE_LOGO_PATH
    ]
    for c in candidates:
        if c and os.path.isfile(c):
            return c
    return None

def generate_favicon(source_logo):
    fav_path = os.path.join(PROJECT_DIR, "favicon.ico")
    if os.path.isfile(fav_path):
        return True
    if not HAS_PIL or not source_logo:
        return False
    try:
        with Image.open(source_logo) as img:
            img = img.convert("RGBA")
            img.thumbnail((64, 64))
            img.save(fav_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
        return True
    except Exception as e:
        log(f"Favicon error: {e}")
        return False

def generate_pwa_icons(source_logo):
    if not HAS_PIL or not source_logo:
        return
    sizes = [72, 96, 128, 144, 152, 192, 384, 512]
    try:
        with Image.open(source_logo) as img:
            img = img.convert("RGBA")
            for size in sizes:
                icon_path = os.path.join(PROJECT_DIR, f"icon-{size}.png")
                if os.path.isfile(icon_path):
                    continue
                canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
                copy_img = img.copy()
                copy_img.thumbnail((size, size))
                left = (size - copy_img.width) // 2
                top = (size - copy_img.height) // 2
                canvas.paste(copy_img, (left, top))
                canvas.save(icon_path, "PNG")
    except Exception as e:
        log(f"Icons error: {e}")

def discover_assets():
    assets = []
    html_files = []
    for root, dirs, files in os.walk(PROJECT_DIR):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith(".")]
        for f in files:
            if f in EXCLUDE_NAMES:
                continue
            ext = os.path.splitext(f)[1].lower()
            if ext in EXCLUDE_EXTS:
                continue
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, PROJECT_DIR).replace("\\", "/")
            if not rel_path.startswith("./"):
                rel_path = "./" + rel_path
            assets.append(rel_path)
            if ext in {".html", ".htm"}:
                html_files.append(full_path)
    assets.sort()
    return assets, html_files

def compute_overall_hash(assets):
    hasher = hashlib.md5()
    for rel_path in assets:
        clean_rel = rel_path.lstrip("./")
        full_path = os.path.join(PROJECT_DIR, clean_rel.replace("/", os.sep))
        h = get_file_hash(full_path)
        if h:
            hasher.update(clean_rel.encode("utf-8"))
            hasher.update(h.encode("utf-8"))
    return hasher.hexdigest()[:10]

def create_manifest(html_files):
    title = "Web App"
    theme_color = "#0D9488"
    start_url = "./index.html"
    if html_files:
        main_html = html_files[0]
        for hf in html_files:
            if "index.html" in os.path.basename(hf).lower():
                main_html = hf
                break
        start_url = "./" + os.path.relpath(main_html, PROJECT_DIR).replace("\\", "/")
        try:
            with open(main_html, "r", encoding="utf-8", errors="ignore") as f:
                c = f.read()
            m_title = re.search(r"<title[^>]*>([\s\S]*?)</title>", c, re.IGNORECASE)
            if m_title:
                title = m_title.group(1).strip()
            m_theme = re.search(r'<meta\s+name=["\']theme-color["\']\s+content=["\']([^"\']+)["\']', c, re.IGNORECASE)
            if m_theme:
                theme_color = m_theme.group(1).strip()
        except Exception:
            pass

    icons_meta = []
    for size in [192, 512]:
        p = os.path.join(PROJECT_DIR, f"icon-{size}.png")
        if os.path.isfile(p):
            icons_meta.append({
                "src": f"./icon-{size}.png",
                "sizes": f"{size}x{size}",
                "type": "image/png",
                "purpose": "any maskable"
            })
    if os.path.isfile(os.path.join(PROJECT_DIR, "icon.svg")):
        icons_meta.append({
            "src": "./icon.svg",
            "sizes": "any",
            "type": "image/svg+xml"
        })

    manifest_data = {
        "name": title,
        "short_name": title[:24],
        "description": title,
        "start_url": start_url,
        "scope": "./",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": theme_color,
        "icons": icons_meta
    }

    manifest_json_path = os.path.join(PROJECT_DIR, "manifest.json")
    if not os.path.isfile(os.path.join(PROJECT_DIR, "manifest.webmanifest")):
        with open(manifest_json_path, "w", encoding="utf-8") as f:
            json.dump(manifest_data, f, indent=2)

def create_service_worker(assets, version_hash):
    sw_path = os.path.join(PROJECT_DIR, "sw.js")
    cache_name = f"pwa-cache-{version_hash}"
    assets_js = json.dumps(assets, indent=2)
    sw_code = f"""const CACHE_NAME = '{cache_name}';
const ASSETS = {assets_js};

self.addEventListener('install', (e) => {{
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => Promise.allSettled(ASSETS.map((url) => c.add(url))))
      .then(() => self.skipWaiting())
  );
}});

self.addEventListener('activate', (e) => {{
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
}});

self.addEventListener('fetch', (e) => {{
  const req = e.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  if (req.mode === 'navigate') {{
    e.respondWith(
      fetch(req)
        .then((res) => {{
          if (res && res.status === 200) {{
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {{}});
          }}
          return res;
        }})
        .catch(() =>
          caches.match(req, {{ ignoreSearch: true }})
            .then((cached) => cached || caches.match('./index.html', {{ ignoreSearch: true }}))
            .then((cached) => cached || caches.match('./', {{ ignoreSearch: true }}))
            .then((cached) => cached || caches.match('./offline.html', {{ ignoreSearch: true }}))
            .then((cached) => cached || new Response('Offline', {{ status: 503, headers: {{ 'Content-Type': 'text/plain' }} }}))
        )
    );
    return;
  }}

  e.respondWith(
    caches.match(req, {{ ignoreSearch: true }}).then((cached) => {{
      if (cached) {{
        fetch(req)
          .then((res) => {{
            if (res && res.status === 200) {{
              const copy = res.clone();
              caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {{}});
            }}
          }})
          .catch(() => {{}});
        return cached;
      }}
      return fetch(req)
        .then((res) => {{
          if (res && res.status === 200) {{
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {{}});
          }}
          return res;
        }})
        .catch(() => caches.match(req, {{ ignoreSearch: true }}))
        .then((finalRes) => {{
          if (finalRes) return finalRes;
          return new Response('', {{ status: 408, statusText: 'Offline' }});
        }});
    }}).catch(() => {{
      return caches.match(req, {{ ignoreSearch: true }}).then((r) => r || new Response('', {{ status: 408 }}));
    }})
  );
}});
"""
    with open(sw_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(sw_code)

def update_html_files(html_files, version_hash):
    sw_reg_snippet = f"""  <script>
    if ('serviceWorker' in navigator) {{
      window.addEventListener('load', function() {{
        navigator.serviceWorker.register('./sw.js?v={version_hash}').catch(function() {{}});
      }});
    }}
  </script>
"""
    for hf in html_files:
        try:
            with open(hf, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            original_content = content

            if re.search(r"sw\.js(\?v[^'\"`\s]*)?", content):
                content = re.sub(r"sw\.js(\?v[^'\"`\s]*)?", f"sw.js?v={version_hash}", content)
            else:
                if "</body>" in content:
                    content = content.replace("</body>", f"{sw_reg_snippet}</body>")
                else:
                    content += f"\n{sw_reg_snippet}"

            if not re.search(r'<link\s+[^>]*rel=["\']manifest["\']', content, re.IGNORECASE):
                manifest_href = "manifest.webmanifest" if os.path.isfile(os.path.join(PROJECT_DIR, "manifest.webmanifest")) else "manifest.json"
                manifest_tag = f'  <link rel="manifest" href="{manifest_href}">\n'
                if "</head>" in content:
                    content = content.replace("</head>", f"{manifest_tag}</head>")

            if not re.search(r'<link\s+[^>]*rel=["\'](?:shortcut\s+)?icon["\']', content, re.IGNORECASE):
                icon_tag = '  <link rel="icon" type="image/x-icon" href="favicon.ico">\n'
                if "</head>" in content:
                    content = content.replace("</head>", f"{icon_tag}</head>")

            if content != original_content:
                with open(hf, "w", encoding="utf-8", newline="\n") as f:
                    f.write(content)
        except Exception as e:
            log(f"HTML update error on {os.path.basename(hf)}: {e}")

def show_popup(title, message, is_error=False):
    flag = 0x10 if is_error else 0x40
    try:
        ctypes.windll.user32.MessageBoxTimeoutW(0, message, title, flag, 0, 5000)
    except Exception:
        try:
            ctypes.windll.user32.MessageBoxW(0, message, title, flag)
        except Exception:
            pass

def main():
    source_logo = find_source_logo()
    generate_favicon(source_logo)
    generate_pwa_icons(source_logo)

    offline_path = os.path.join(PROJECT_DIR, "offline.html")
    if not os.path.isfile(offline_path):
        with open(offline_path, "w", encoding="utf-8", newline="\n") as f:
            f.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Offline</title></head><body><h1>You are offline.</h1></body></html>")

    assets, html_files = discover_assets()
    if not html_files:
        raise RuntimeError("No HTML files found in project directory.")

    version_hash = compute_overall_hash(assets)
    create_manifest(html_files)
    create_service_worker(assets, version_hash)
    update_html_files(html_files, version_hash)

    version_json_path = os.path.join(PROJECT_DIR, "version.json")
    with open(version_json_path, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"version": version_hash, "updated": int(time.time()), "assetsCount": len(assets)}, f, indent=2)

    msg = f"PWA & Service Worker Updated Successfully!\n\nVersion Hash: {version_hash}\nCached Assets: {len(assets)} files\nUpdated HTML: {len(html_files)} file(s)"
    log(msg)
    show_popup("PWA Update - Success", msg, False)

if __name__ == "__main__":
    try:
        main()
    except Exception:
        import traceback
        err_msg = traceback.format_exc()
        log(err_msg)
        show_popup("PWA Update - Error", f"PWA Update Failed:\n\n{err_msg}", True)
