self.addEventListener('install', (event) => {
  self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./sw/config.js");

self.addEventListener("fetch",e=>{
  console.log(e.request.url);
  console.log(String(e.request.url).startsWith(config.serverUrl))
  if(e.request.url.startsWith(config.serverUrl)){
    return fetch(e.request);
  }
    const urlObj=new URL(e.request.url);
    const req_url=config.serverUrl+encodeURIComponent(urlObj.pathname.replace(config.directory+config.scope,""));
    e.respondWith((async () => {
      const request=new Request(req_url,{
        ...e.request
      });
      console.log(request);
      console.log(req_url)
      return await fetch(req_url);
    })(),);
});
