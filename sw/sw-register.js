if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register("../sw.js",{scope:config.directory+config.scope}).then(registration=>{
            console.log("サービスワーカーの登録に成功しました",registration);
        }).catch(error=>{
            console.error("サービスワーカーの登録に失敗しました",error)
        });
    });
}else{
    console.log("サービスワーカーに対応していません");
}
