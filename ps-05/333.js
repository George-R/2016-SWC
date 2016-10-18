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

for(var t = 0; t < 360; t+=0.1){
    var rad = t * (1.66666666666*Math.PI) / 360;
    drawingPad.strokeStyle = "hsla(0, 0%, 0%, 1.0)";
    drawingPad.beginPath();
    drawingPad.moveTo(X, Y);
    drawingPad.lineTo(X + q * Math.cos(rad), Y + z * Math.sin(rad));
    drawingPad.stroke();
}

var myCanvas2 = document.getElementById('canvas2');
var drawingPad2 = myCanvas2.getContext('2d');

var X = myCanvas.width /2,
    Y = myCanvas.height/2,
    q = X,
    z = Y;

for(var t = 0; t < 360; t+=0.1){
    var rad = t * (1.645555*Math.PI) / 360;
    drawingPad2.strokeStyle = "hsla(0, 0%, 0%, 1.0)";
    drawingPad2.beginPath();
    drawingPad2.moveTo(X, Y);
    drawingPad2.lineTo(X + q * Math.cos(rad), Y + z * Math.sin(rad));
    drawingPad2.stroke();
}

var myCanvas3 = document.getElementById('canvas3');
var drawingPad3 = myCanvas3.getContext('2d');

var X = myCanvas.width /2,
    Y = myCanvas.height/2,
    q = X,
    z = Y;

for(var t = 0; t < 360; t+=0.1){
    var rad = t * (1.65666666666*Math.PI) / 360;
    drawingPad3.strokeStyle = "hsla(0, 0%, 0%, 1.0)";
    drawingPad3.beginPath();
    drawingPad3.moveTo(X, Y);
    drawingPad3.lineTo(X + q * Math.cos(rad), Y + z * Math.sin(rad));
    drawingPad3.stroke();
}
