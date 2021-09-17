//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/                                                ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 11.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝



console.log('app.js');





var app={
    data: {}, 
    elem: "", 
    drawer: "",
    start: function() {
      dbg.log("Variabe Method app.start()");
      //document.body.innerHTML += '<div id="rootApp" ><\div>' ;
      this.elem = document.getElementById("mainApp").transferControlToOffscreen();
      
      //var cWorker = document.getElementById("rootApp").transferControlToOffscreen();
      this.drawer = new Worker("webWorkers/drawer.js");
      this.drawer.postMessage({ canvas: this.elem }, [this.elem]);
      this.deviceScan()
    }, 
    deviceScan : function () {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        dbg.log("Mobile detected") ;
        this.data.mobile= true;
      }else{
        this.data.mobile = false;
        dbg.log("not mobile device");
      }
    } 
  } 



window.onload = function(){
    dbg.start();
    app.start();

}
  

  
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js  ▐       ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀