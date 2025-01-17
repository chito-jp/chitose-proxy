self.addEventListener('install', (event) => {
  self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./config/config.js");

self.addEventListener("fetch",e=>{
  if(e.request.url.startsWith(config.serverUrl))return fetch(e.request);
    const urlObj=new URL(e.request.url);
    const req_url=config.serverUrl+encodeURIComponent(urlObj.pathname.replace(config.directory+config.scope,""));
    e.respondWith((async () => {
      const request=new Request(req_url,{
        ...e.request
      });
      console.log(request);
      console.log(req_url)
      return fetch(req_url);
    })(),);
});