self.addEventListener('install', (event) => {
  self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./config/config.js");

self.addEventListener("fetch",e=>{
    const urlObj=new URL(e.request.url);
    const req_url=decodeURIComponent(urlObj.pathname.replace(config.directory+config.scope,""));
    e.respondWith((async () => {
      e.request.url=req_url;
      const request=new Request(req_url,{
        ...e.request
      });
      console.log(e.request,request);
      console.log(e.request==request);
      console.log(req_url)
      return fetch(req_url);
    })(),);
});