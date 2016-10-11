


  var canvas = document.getElementById('canvas');
  var drawingPad = canvas.getContext('2d');
  var x ;
  var y;

  var setColor = function (hue, saturation, lightness)
   var colorString = "hsl("
   hue + ","
   +saturation + "%"
   +lightness + "%";
   drawingpad/fillstyle = colorString;

 };

 for(var x = 0; x<=7; x++) {
    for(var y =0; y<=7; y++) {
      setColor (0,10,20 * x);
      drawingPad.fillRect(x*50. y*50, 6*x, 6*y);

    }
 }
