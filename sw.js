const path = '/tmg-tile-editor';
const app_prefix = 'tmg-tile-editor';
const version = '0.0.01';
const urls = [
  `${path}/`,
  `${path}/index.html`,
  `${path}/style.css`,
  `${path}/main.js`,
  `${path}/build/favicon.ico`,
  `${path}/build/icon.ico`,
  `${path}/build/icon.png`,
  `${path}/src/engine.js`,
  `${path}/src/modules/collision_manager.js`,
  `${path}/src/modules/draw_manager.js`,
  `${path}/src/modules/image_loader.js`,
  `${path}/src/modules/input_manager.js`,
  `${path}/src/modules/screen_manager.js`,
  `${path}/src/modules/touch.js`,
  `${path}/src/objects/buttons.js`,
  `${path}/src/objects/grid.js`,
  `${path}/src/images/gear.png`,
  `${path}/src/images/Enemies.png`,
  `${path}/src/images/Enemies_01.png`,
  `${path}/src/images/buttons/buttons.png`,
  `${path}/src/images/buttons/towers.png`,
  `${path}/src/images/backgrounds/circuitBoard1.png`,
  `${path}/src/images/backgrounds/level1.png`,
  `${path}/src/images/backgrounds/level2.png`
];

// cache app on install
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(version);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(urls)
    .then(() => console.log('Assets added to cache'))
    .catch(err => console.log('Error while fetching assets', err));
  })());
});

// get cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(version);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

// clear cache on activation
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === version) { return; }
      return caches.delete(key);
    }));
  }));
});