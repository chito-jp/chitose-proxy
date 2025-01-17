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
    e.respondWith((async()=>{
      try{
        const response = await fetch(req_url);
        if (!response || !response.ok) {
          throw new Error("プロキシサーバーへのリクエストに失敗しました");
        }
        console.log(response);
        return response;
      }catch(e){
        console.error("プロキシサーバーへのリクエスト失敗:", e);
        return new Response("プロキシエラー", { status: 502 });
      }
    }));
});