const CACHE_NAME = 'australian-credit-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/front-asset/images/logo.webp',
  '/front-asset/images/banner.webp',
  '/front-asset/images/icon-1.webp',
  '/front-asset/images/icon-2.webp',
  '/front-asset/images/icon-3.webp',
  '/front-asset/images/icon-4.webp',
  '/front-asset/images/icon-5.webp',
  '/front-asset/images/icon-6.webp',
  '/front-asset/images/prev.webp',
  '/front-asset/images/next.webp',
  '/front-asset/images/bars.webp',
  '/front-asset/images/tiktok.webp',
  '/front-asset/images/product_review.svg',
  '/front-asset/images/proofS1E1.webp',
  '/front-asset/images/proofS1E2.webp',
  '/front-asset/images/proofS2E1.webp',
  '/front-asset/images/proofS2E2.webp',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Network first for API calls
  if (request.url.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache first for static assets
  event.respondWith(
    caches.match(request)
      .then(response => {
        return response || fetch(request);
      })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
} 