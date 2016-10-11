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

var random = 0;

for (var x = 10 ; x <= 356; x = x + 11) {
    var y = 20
    random = Math.random() * 150;
    ctx.moveTo(x,y);
    ctx.lineTo(x,y*15);
    ctx.strokeStyle = getColor(0,10,random,random/150)
    ctx.stroke();
}
