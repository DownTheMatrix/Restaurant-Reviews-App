// Create a version and a cache name
const version = '1.0.0';
const cacheName = `restaurant-reviews-app-version ${version}`;

// Cache all the files
/* self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(
                [
                    '/',
                    '/index.html',
                    '/css/styles.css',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/register_sw.js',
                    '/js/restaurant_info.js',
                    '/data/restaurant.json',
                    '/restaurant.html?id=1',
                    '/restaurant.html?id=2',
                    '/restaurant.html?id=3',
                    '/restaurant.html?id=4',
                    '/restaurant.html?id=5',
                    '/restaurant.html?id=6',
                    '/restaurant.html?id=7',
                    '/restaurant.html?id=8',
                    '/restaurant.html?id=9',
                    '/restaurant.html?id=10'
                ]).catch(error => {
                console.log('Caches opening failed: ' + error);
            });
        })
    );
}); */


// Cache falling back to the network: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#cachefallback
/* self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        if (response.status === 404) {
          return caches.match('pages/404.html');
        }
        return response
      });
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
    })
  );
}); */

  // Remove outdated cache
 /*  self.addEventListener('activate', event => {
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
  }); */