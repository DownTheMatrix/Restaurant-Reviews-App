// Empty the old cache for testing
caches.keys().then(names => {
    for (let name of names)
        caches.delete(name);
});

// Create a version and a cache name
const staticCacheName = 'restaurant-static-v1';

// Cache all the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll([
          '/',
          'index.html',
          'restaurant.html',
          'css/styles.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/register_sw.js',
          'data/restaurants.json',
          'offline/404.html',
          'offline/offline.html',
          'offline/img/no-wifi.png',
          'offline/img/error-404.png'
        ]).catch(error => {
        console.log('Caches opening failed: ' + error);
      });
    })
  );
});

// Remove outdated cache
self.addEventListener('activate', event => {
  event.waitUntil(
    // caches.delete('-restaurant-static-001')
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('restaurant-') && cacheName !== staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Cache falling back to the network: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#cachefallback
self.addEventListener('fetch', event => {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        if (response.status === 404) {
          console.log(response.status);
          return caches.match('offline/404.html');
        }
        return response;
      });
    }).catch(error => {
      // If both fail, show a generic fallback:
      console.log('Error: ', error);
      return caches.match('offline/offline.html');
    })
  );
});