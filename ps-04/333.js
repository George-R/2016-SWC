var myCanvas = document.getElementById('canvas');
var drawingPad = myCanvas.getContext('2d');

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var x = 10;
var y = 10;
var g = 10;
var s = 10;

var lightness = 0;

for(var z = 0 ; z < 332 ; z++) {

    x = s;
    y = Math.random()* 1000;
    s = x;
    g = Math.random() * 1000;

  drawingPad.beginPath();
  drawingPad.moveTo(x+4,y+4);
  drawingPad.lineTo(g*2,s*2);
  drawingPad.strokeStyle = getColor(0, 0, lightness, 1);
  drawingPad.stroke();

}
