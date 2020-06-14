// Polyfill for Chrome caching
importScripts('utils/cache-polyfill.js')

// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(
    // Open a cache
    caches.open('v1').then(function(cache) {
      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        'utils/index.js',
        'js/jquery.min.js',
        'js/loader.js',
        'js/stopwatch.js',
        'index.css',
        'favicon.png'
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {
      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});