const CACHE_NAME = 'pwa-cache-a561000571';
const ASSETS = [
  "./favicon.ico",
  "./fonts.css",
  "./fonts/cinzel.woff2",
  "./fonts/inter.woff2",
  "./fonts/jetbrains-mono.woff2",
  "./icon-128.png",
  "./icon-144.png",
  "./icon-152.png",
  "./icon-192.png",
  "./icon-384.png",
  "./icon-512.png",
  "./icon-72.png",
  "./icon-96.png",
  "./icon.svg",
  "./index.html",
  "./jsqr.min.js",
  "./logo.png",
  "./manifest.webmanifest",
  "./mqtt.min.js",
  "./offline.html",
  "./pako.min.js",
  "./peerjs.min.js",
  "./qrcode.min.js",
  "./tailwind.min.js",
  "./version.json"
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => Promise.allSettled(ASSETS.map((url) => c.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true })
            .then((cached) => cached || caches.match('./index.html', { ignoreSearch: true }))
            .then((cached) => cached || caches.match('./', { ignoreSearch: true }))
            .then((cached) => cached || caches.match('./offline.html', { ignoreSearch: true }))
            .then((cached) => cached || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } }))
        )
    );
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) {
        fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
            }
          })
          .catch(() => {});
        return cached;
      }
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }))
        .then((finalRes) => {
          if (finalRes) return finalRes;
          return new Response('', { status: 408, statusText: 'Offline' });
        });
    }).catch(() => {
      return caches.match(req, { ignoreSearch: true }).then((r) => r || new Response('', { status: 408 }));
    })
  );
});
