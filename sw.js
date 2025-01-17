self.addEventListener('install', (event) => {
  self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./config/config.js");

self.addEventListener("fetch",e=>{
    console.log(e.request);
    const urlObj=new URL(e.request.url);
    const req_url=decodeURIComponent(urlObj.pathname.replace(config.directory+config.scope,""));
    console.log(req_url);
    e.respondWith((async () => {
        const cachedResponse = await caches.match(e.request);
        if (cachedResponse) return cachedResponse;
        return fetch(e.request);
      })(),);
});