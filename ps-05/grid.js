var myCanvas = document.getElementById('canvas');
 var drawingPad = myCanvas.getContext('2d');

 // @params:
 // hue -- number 0-360 (think color wheel degrees)
 // saturation number 0-100
 // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
 // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
 var getColor = function(hue, saturation, lightness, alpha) {
   var colorString = "hsla(" +
     hue + ", "
     + saturation + "%,"
     + lightness  + "%,"
     + alpha + ")";
   return colorString;
 };

 var drawSquare = function(x,y,size) {
   drawingPad.fillRect(x * size, y * size, size , size);
   drawingPad.strokeStyle = getColor(0, 0, 100, 0.3);
   drawingPad.strokeRect(x * size, y * size, size, size);
 }

 var size = 5;
 var numX = 1000;
 var numY = 1000;
 var Lightness = 0;

 for(var x = 0 ; x < numX; x++) {
   for(var y = 0 ; y < numY; y++) {
     Lightness = y;
     drawingPad.fillStyle = getColor(0, 0, Lightness, 1);
     drawSquare(x,y,size);

   }
 }

 var myCanvas2 = document.getElementById('canvas2');
  var drawingPad2 = myCanvas2.getContext('2d');

  // @params:
  // hue -- number 0-360 (think color wheel degrees)
  // saturation number 0-100
  // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
  // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
  var getColor = function(hue, saturation, lightness, alpha) {
    var colorString = "hsla(" +
      hue + ", "
      + saturation + "%,"
      + lightness  + "%,"
      + alpha + ")";
    return colorString;
  };

  var drawSquare = function(x,y,size) {
    drawingPad2.fillRect(x * size, y * size, size , size);
    drawingPad2.strokeStyle = getColor(0, 0, 100, 0.3);
    drawingPad2.strokeRect(x * size, y * size, size, size);
  }

  var size = 5;
  var numX = 1000;
  var numY = 1000;
  var Lightness = 0;

  for(var x = 0 ; x < numX; x++) {
    for(var y = 0 ; y < numY; y++) {
      Lightness = y;
      drawingPad2.fillStyle = getColor(0, 0, Lightness, 1);
      drawSquare(x,y,size);

    }
  }

  var myCanvas3 = document.getElementById('canvas3');
   var drawingPad3 = myCanvas3.getContext('2d');

   // @params:
   // hue -- number 0-360 (think color wheel degrees)
   // saturation number 0-100
   // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
   // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
   var getColor = function(hue, saturation, lightness, alpha) {
     var colorString = "hsla(" +
       hue + ", "
       + saturation + "%,"
       + lightness  + "%,"
       + alpha + ")";
     return colorString;
   };

   var drawSquare = function(x,y,size) {
     drawingPad3.fillRect(x * size, y * size, size , size);
     drawingPad3.strokeStyle = getColor(0, 0, 100, 0.3);
     drawingPad3.strokeRect(x * size, y * size, size, size);
   }

   var size = 5;
   var numX = 1000;
   var numY = 1000;
   var Lightness = 0;

   for(var x = 0 ; x < numX; x++) {
     for(var y = 0 ; y < numY; y++) {
       Lightness = y;
       drawingPad3.fillStyle = getColor(0, 0, Lightness, 1);
       drawSquare(x,y,size);

     }
   }

   var myCanvas4 = document.getElementById('canvas4');
    var drawingPad4 = myCanvas4.getContext('2d');

    // @params:
    // hue -- number 0-360 (think color wheel degrees)
    // saturation number 0-100
    // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
    // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
    var getColor = function(hue, saturation, lightness, alpha) {
      var colorString = "hsla(" +
        hue + ", "
        + saturation + "%,"
        + lightness  + "%,"
        + alpha + ")";
      return colorString;
    };

    var drawSquare = function(x,y,size) {
      drawingPad4.fillRect(x * size, y * size, size , size);
      drawingPad4.strokeStyle = getColor(0, 0, 100, 0.3);
      drawingPad4.strokeRect(x * size, y * size, size, size);
    }

    var size = 5;
    var numX = 1000;
    var numY = 1000;
    var Lightness = 0;

    for(var x = 0 ; x < numX; x++) {
      for(var y = 0 ; y < numY; y++) {
        Lightness = y;
        drawingPad4.fillStyle = getColor(0, 0, Lightness, 1);
        drawSquare(x,y,size);

      }
    }

    var myCanvas5 = document.getElementById('canvas5');
     var drawingPad5 = myCanvas5.getContext('2d');

     // @params:
     // hue -- number 0-360 (think color wheel degrees)
     // saturation number 0-100
     // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
     // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
     var getColor = function(hue, saturation, lightness, alpha) {
       var colorString = "hsla(" +
         hue + ", "
         + saturation + "%,"
         + lightness  + "%,"
         + alpha + ")";
       return colorString;
     };

     var drawSquare = function(x,y,size) {
       drawingPad5.fillRect(x * size, y * size, size , size);
       drawingPad5.strokeStyle = getColor(0, 0, 100, 0.3);
       drawingPad5.strokeRect(x * size, y * size, size, size);
     }

     var size = 5;
     var numX = 1000;
     var numY = 1000;
     var Lightness = 0;

     for(var x = 0 ; x < numX; x++) {
       for(var y = 0 ; y < numY; y++) {
         Lightness = y;
         drawingPad5.fillStyle = getColor(0, 0, Lightness, 1);
         drawSquare(x,y,size);

       }
     }

     var myCanvas6 = document.getElementById('canvas6');
      var drawingPad6 = myCanvas6.getContext('2d');

      // @params:
      // hue -- number 0-360 (think color wheel degrees)
      // saturation number 0-100
      // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
      // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
      var getColor = function(hue, saturation, lightness, alpha) {
        var colorString = "hsla(" +
          hue + ", "
          + saturation + "%,"
          + lightness  + "%,"
          + alpha + ")";
        return colorString;
      };

      var drawSquare = function(x,y,size) {
        drawingPad6.fillRect(x * size, y * size, size , size);
        drawingPad6.strokeStyle = getColor(0, 0, 100, 0.3);
        drawingPad6.strokeRect(x * size, y * size, size, size);
      }

      var size = 5;
      var numX = 1000;
      var numY = 1000;
      var Lightness = 0;

      for(var x = 0 ; x < numX; x++) {
        for(var y = 0 ; y < numY; y++) {
          Lightness = y;
          drawingPad6.fillStyle = getColor(0, 0, Lightness, 1);
          drawSquare(x,y,size);

        }
      }

      var myCanvas7 = document.getElementById('canvas7');
       var drawingPad7 = myCanvas7.getContext('2d');

       // @params:
       // hue -- number 0-360 (think color wheel degrees)
       // saturation number 0-100
       // lightness  number 0-100  0 == maximum-dark, 100 == maximum-light
       // alpha  number 0-1  0 == transparent, 0.5 == half opaque, 1 == solid
       var getColor = function(hue, saturation, lightness, alpha) {
         var colorString = "hsla(" +
           hue + ", "
           + saturation + "%,"
           + lightness  + "%,"
           + alpha + ")";
         return colorString;
       };

       var drawSquare = function(x,y,size) {
         drawingPad7.fillRect(x * size, y * size, size , size);
         drawingPad7.strokeStyle = getColor(0, 0, 100, 0.3);
         drawingPad7.strokeRect(x * size, y * size, size, size);
       }

       var size = 5;
       var numX = 1000;
       var numY = 1000;
       var Lightness = 0;

       for(var x = 0 ; x < numX; x++) {
         for(var y = 0 ; y < numY; y++) {
           Lightness = y;
           drawingPad7.fillStyle = getColor(0, 0, Lightness, 1);
           drawSquare(x,y,size);

         }
       }
