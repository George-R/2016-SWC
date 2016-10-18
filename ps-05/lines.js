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

var X = myCanvas.width /2,
    Y = myCanvas.height/2,
    q = X,
    z = Y;

for(var t = 1; t < 360; t+=(360/333)){
    var rad = t * (2*Math.PI) / 360;
    drawingPad.strokeStyle = "hsla(0, 0%, 0%, 1.0)";
    drawingPad.beginPath();
    drawingPad.moveTo(X, Y);
    drawingPad.lineTo(X + q * Math.cos(rad), Y + z * Math.sin(rad));
    drawingPad.stroke();
}
