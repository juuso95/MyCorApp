// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        console.log(cordova.file);
        

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    

        
       //var options = { frequency: 100 };
       //var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    };
   


   // var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;
   // function onSuccess(acceleration) {
     //   x1 = acceleration.x;
      //  y1 = acceleration.y;
      //  z1 = acceleration.z;

    //////    var element = document.getElementById('accelerometer');
     //////   element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
       //////     'Acceleration Y: ' + acceleration.y + '<br />' +
         //////   'Acceleration Z: ' + acceleration.z + '<br />' +
          //////  'Timestamp: ' + acceleration.timestamp + '<br />';
    

       // var td = document.getElementById("list");
       // td.removeChild(td.childNodes[1]);

  //  }
  //  function onError(e) {
        //do something
   // }
  // setInterval(function () {
    //   var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

      //  if (change > 25) {

            //var bodyElement = document.querySelector("body");
            //bodyElement.style.backgroundColor = getRandomColor();

       //     var td = document.getElementById("list");
         //   td.removeChild(td.childNodes[1]);

     //  }
     //  x2 = x1;
     //  y2 = y1;
     //  z2 = z1;
   // }, 100);

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

} )();
