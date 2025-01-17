self.addEventListener('install', (event) => {
  self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

importScripts("./config/config.js");

setConfig(self);

self.addEventListener("fetch",e=>{
    console.log(e.request);
    const urlObj=new URL(e.request.url);
    const path=urlObj.pathname.replace(config.site.directory,"");
    console.log(path);
    window.alert(e.request);
    return fetch(e.request);
});