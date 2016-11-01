var canvas = document.getElementById('canvas');
canvas.addEventListener("mousedown", doMouseDown, false);

var ctx = canvas.getContext('2d');
function doMouseDown(event){


var X = event.clientX;
var Y = event.clientY;

ctx.beginPath();
ctx.arc(X, Y, 40*Math.random(), 40*Math.random(), Math.PI/Math.random(), true);
ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
ctx.fill();
}
