/* ============================================
   SERVICE WORKER — Shivdhenu PWA
   Makes site work offline after first visit
   ============================================ */
const CACHE = 'shivdhenu-v7';
const FILES = [
  '/', '/index.html',
  '/pages/story.html', '/pages/products.html',
  '/pages/why.html', '/pages/testimonials.html',
  '/pages/contact.html',
  '/css/style.css', '/js/app.js', '/js/data.js',
  '/assets/back_logo.png', '/assets/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).catch(() => { })));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {

        if (
          response &&
          response.status === 200 &&
          response.type === 'basic'
        ) {
          const responseClone = response.clone();

          caches.open(CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
        }

        return response;
      }).catch(() => cached);
    })
  );
});
