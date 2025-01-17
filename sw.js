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
    const path=urlObj.pathname.replace(config.directory+config.scope,"");
    console.log(path);
    return fetch(e.request);
});