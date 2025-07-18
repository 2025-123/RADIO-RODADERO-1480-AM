
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('radio-rodadero-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './logo.jpg'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
