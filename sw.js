/*
 * Katar (قطار) & Navakankari — Offline Service Worker (generated from sw-template.js)
 * Copyright © 2026 Yasin Ullah. All Rights Reserved.
 *
 * This template is consumed by "build pwa make html app offline and installable...pyw".
 * The generated file is sw.js. The cache name and the list of local web assets
 * are injected by the build script.
 *
 * IMPORTANT:
 * Every runtime library is served from this origin and precached.
 * Never add a cross-origin CDN dependency: those requests are unavailable
 * when offline and caused the old "libraries not loaded" bug.
 */

const CACHE_NAME = 'katar-offline-8e0c40dbcb';
const OFFLINE_URL = './offline.html';

const PRECACHE_ASSETS = [
  "./",
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
  "./patch.json",
  "./peerjs.min.js",
  "./qrcode.min.js",
  "./tailwind.min.js",
  "./version.json"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    await Promise.all(PRECACHE_ASSETS.map(async (asset) => {
      try {
        const request = new Request(asset, { cache: 'reload' });
        const response = await fetch(request);
        if (response && response.ok) {
          await cache.put(asset, response);
        }
      } catch (error) {
        /* A single optional asset must never abort the whole offline install. */
      }
    }));

    const appShell =
      (await cache.match('./index.html', { ignoreSearch: true })) ||
      (await cache.match('./', { ignoreSearch: true }));

    if (!appShell) {
      /* Refuse to activate a cache that cannot boot the game offline. */
      throw new Error('Offline install failed: app shell was not cached.');
    }

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => {
      if (key === CACHE_NAME) return undefined;
      if (key.startsWith('katar-offline-') || key.startsWith('pwa-cache-')) {
        return caches.delete(key);
      }
      return undefined;
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

function fetchWithTimeout(request, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Network timeout')), timeoutMs);
    fetch(request).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

async function handleNavigation(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    /* Network-first so online visitors always get the newest build. */
    const response = await fetchWithTimeout(request, 4500);
    if (response && response.ok) {
      /* Store the app shell under one stable key (ignore ?join=ROOM queries). */
      cache.put('./index.html', response.clone()).catch(() => {});
      return response;
    }
    throw new Error('Bad navigation response');
  } catch (error) {
    /* Offline / flaky network: serve the complete cached app. */
    const cached =
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match('./index.html', { ignoreSearch: true })) ||
      (await cache.match('./', { ignoreSearch: true })) ||
      (await cache.match(OFFLINE_URL, { ignoreSearch: true }));

    if (cached) return cached;

    return new Response('Offline', {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function handleAsset(request) {
  const cache = await caches.open(CACHE_NAME);

  /* Cache-first: local libraries and fonts are already fully precached. */
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok && response.type === 'basic') {
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch (error) {
    const fallback = await cache.match(request, { ignoreSearch: true });
    if (fallback) return fallback;

    const accept = request.headers.get('accept') || '';
    if (accept.includes('text/html')) {
      const offlinePage = await cache.match(OFFLINE_URL, { ignoreSearch: true });
      if (offlinePage) return offlinePage;
    }

    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (error) {
    return;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  /* Leave cross-origin requests (Puter AI, MQTT brokers, PeerJS) to the browser. */
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(handleAsset(request));
});
