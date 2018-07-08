// Create a version and a cache name
const version = '1.0.0';
const staticCacheName = `restaurant-reviews-app-version ${version}`;

// Cache all the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(
        [
          'index.html',
          'restaurant.html',
          'css/styles.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/register_sw.js',
          'js/restaurant_info.js',
          'data/restaurants.json'
        ]).catch(error => {
        console.log('Caches opening failed: ' + error);
      });
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
          return caches.match('offline/404.html');
        }
        return response
      });
    }).catch( () => {
      // If both fail, show a generic fallback:
      return caches.match('offline/404.html');
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
          return cacheName.startsWith('restaurant-static-') && cacheName !== staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});