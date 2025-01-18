self.addEventListener("install", (event) => {
  self.skipWaiting();
});
  
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./sw/config.js");

self.addEventListener("fetch",e=>{
  e.respondWith((async()=>{
    const cachedResponse = await caches.match(e.request);
    if(cachedResponse)return cachedResponse;
    return fetch(e.request);
  }));
});
