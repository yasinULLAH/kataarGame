const CACHE_NAME = 'pwa-cache-cbbb4dff7b';
const ASSETS = [
  "./.gitignore",
  "./android/.gitignore",
  "./android/app/.gitignore",
  "./android/app/build.gradle",
  "./android/app/build/.npmkeep",
  "./android/app/capacitor.build.gradle",
  "./android/app/proguard-rules.pro",
  "./android/app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java",
  "./android/app/src/main/AndroidManifest.xml",
  "./android/app/src/main/assets/capacitor.config.json",
  "./android/app/src/main/assets/capacitor.plugins.json",
  "./android/app/src/main/assets/public/cordova.js",
  "./android/app/src/main/assets/public/cordova_plugins.js",
  "./android/app/src/main/assets/public/favicon.ico",
  "./android/app/src/main/assets/public/fonts.css",
  "./android/app/src/main/assets/public/fonts/cinzel.woff2",
  "./android/app/src/main/assets/public/fonts/inter.woff2",
  "./android/app/src/main/assets/public/fonts/jetbrains-mono.woff2",
  "./android/app/src/main/assets/public/icon-128.png",
  "./android/app/src/main/assets/public/icon-144.png",
  "./android/app/src/main/assets/public/icon-152.png",
  "./android/app/src/main/assets/public/icon-192.png",
  "./android/app/src/main/assets/public/icon-384.png",
  "./android/app/src/main/assets/public/icon-512.png",
  "./android/app/src/main/assets/public/icon-72.png",
  "./android/app/src/main/assets/public/icon-96.png",
  "./android/app/src/main/assets/public/icon.svg",
  "./android/app/src/main/assets/public/index.html",
  "./android/app/src/main/assets/public/jsqr.min.js",
  "./android/app/src/main/assets/public/logo.png",
  "./android/app/src/main/assets/public/manifest.webmanifest",
  "./android/app/src/main/assets/public/mqtt.min.js",
  "./android/app/src/main/assets/public/offline.html",
  "./android/app/src/main/assets/public/pako.min.js",
  "./android/app/src/main/assets/public/peerjs.min.js",
  "./android/app/src/main/assets/public/qrcode.min.js",
  "./android/app/src/main/assets/public/tailwind.min.js",
  "./android/app/src/main/assets/public/version.json",
  "./android/app/src/main/java/com/yasin/katargame/MainActivity.java",
  "./android/app/src/main/res/drawable-land-hdpi/splash.png",
  "./android/app/src/main/res/drawable-land-mdpi/splash.png",
  "./android/app/src/main/res/drawable-land-xhdpi/splash.png",
  "./android/app/src/main/res/drawable-land-xxhdpi/splash.png",
  "./android/app/src/main/res/drawable-land-xxxhdpi/splash.png",
  "./android/app/src/main/res/drawable-port-hdpi/splash.png",
  "./android/app/src/main/res/drawable-port-mdpi/splash.png",
  "./android/app/src/main/res/drawable-port-xhdpi/splash.png",
  "./android/app/src/main/res/drawable-port-xxhdpi/splash.png",
  "./android/app/src/main/res/drawable-port-xxxhdpi/splash.png",
  "./android/app/src/main/res/drawable-v24/ic_launcher_foreground.xml",
  "./android/app/src/main/res/drawable/ic_launcher_background.xml",
  "./android/app/src/main/res/drawable/splash.png",
  "./android/app/src/main/res/layout/activity_main.xml",
  "./android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml",
  "./android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml",
  "./android/app/src/main/res/mipmap-hdpi/ic_launcher.png",
  "./android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png",
  "./android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png",
  "./android/app/src/main/res/mipmap-mdpi/ic_launcher.png",
  "./android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png",
  "./android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png",
  "./android/app/src/main/res/mipmap-xhdpi/ic_launcher.png",
  "./android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png",
  "./android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png",
  "./android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png",
  "./android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png",
  "./android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png",
  "./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
  "./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png",
  "./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png",
  "./android/app/src/main/res/values/ic_launcher_background.xml",
  "./android/app/src/main/res/values/strings.xml",
  "./android/app/src/main/res/values/styles.xml",
  "./android/app/src/main/res/xml/config.xml",
  "./android/app/src/main/res/xml/file_paths.xml",
  "./android/app/src/test/java/com/getcapacitor/myapp/ExampleUnitTest.java",
  "./android/build.gradle",
  "./android/capacitor-cordova-android-plugins/build.gradle",
  "./android/capacitor-cordova-android-plugins/cordova.variables.gradle",
  "./android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml",
  "./android/capacitor-cordova-android-plugins/src/main/java/.gitkeep",
  "./android/capacitor-cordova-android-plugins/src/main/res/.gitkeep",
  "./android/capacitor.settings.gradle",
  "./android/gradle.properties",
  "./android/gradle/wrapper/gradle-wrapper.jar",
  "./android/gradle/wrapper/gradle-wrapper.properties",
  "./android/gradlew",
  "./android/gradlew.bat",
  "./android/settings.gradle",
  "./android/variables.gradle",
  "./capacitor.config.json",
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
  "./package-lock.json",
  "./package.json",
  "./pako.min.js",
  "./peerjs.min.js",
  "./prepare-www.js",
  "./qrcode.min.js",
  "./tailwind.min.js",
  "./version.json",
  "./www/favicon.ico",
  "./www/fonts.css",
  "./www/fonts/cinzel.woff2",
  "./www/fonts/inter.woff2",
  "./www/fonts/jetbrains-mono.woff2",
  "./www/icon-128.png",
  "./www/icon-144.png",
  "./www/icon-152.png",
  "./www/icon-192.png",
  "./www/icon-384.png",
  "./www/icon-512.png",
  "./www/icon-72.png",
  "./www/icon-96.png",
  "./www/icon.svg",
  "./www/index.html",
  "./www/jsqr.min.js",
  "./www/logo.png",
  "./www/manifest.webmanifest",
  "./www/mqtt.min.js",
  "./www/offline.html",
  "./www/pako.min.js",
  "./www/peerjs.min.js",
  "./www/qrcode.min.js",
  "./www/tailwind.min.js",
  "./www/version.json"
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
