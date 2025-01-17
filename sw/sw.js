self.addEventListener("fetch",e=>{
    console.log(e.request);
    return fetch(e.request);
});