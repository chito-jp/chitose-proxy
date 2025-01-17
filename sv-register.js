if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register(config.site.directory+"sw/sw.js").then(registration=>{
            console.log("サービスワーカーの登録に成功しました",registration);
        }).catch(error=>{
            console.error("サービスワーカーの登録に失敗しました",error)
        });
    });
}else{
    console.log("サービスワーカーに対応していません");
}