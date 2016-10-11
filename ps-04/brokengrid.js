var myCanvas = document.getElementById('canvas');
 var ctx = myCanvas.getContext('2d');

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
     Lightness = x;
     drawingPad.fillStyle = getColor(0, 0, Lightness, 1);
     drawSquare(x,y,size);

   }
 }
