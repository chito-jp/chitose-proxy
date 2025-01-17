self.addEventListener('install', (event) => {
  self.skipWaiting(); // 新しいサービスワーカーが即座に有効になるように
});
  
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // 現在のクライアントに対してすぐにサービスワーカーを適用
});

self.addEventListener("fetch",e=>{
    console.log(e.request);
    return fetch(e.request);
});