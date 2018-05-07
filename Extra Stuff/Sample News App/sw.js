const staticAssets = [
  './index.html',
  './app.js',
  './style.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1')
      .then(res => {
        console.log('wait.........!')
        return res.addAll(staticAssets);
      })
  );
  console.log('installed');
  // var cache = caches.open('v1');
  // cache.addAll(staticAssets);
});

self.addEventListener('activate', (event) => {
  console.log('activated');
});

self.addEventListener('fetch', (ev) => {
  console.log('Fetch from Service Worker ', ev);
  const req = ev.request;
  return ev.respondWith(cacheFirst(req));
});

function cacheFirst(req) {
  return caches.match(req)
    .then(res => res)
    .catch(() => fetch(req));
}

