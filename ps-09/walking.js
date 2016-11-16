var ctx = document.getElementById("walking2").getContext('2d');

var beginX = 0;
var beginY = 0;
var beginZ = 250;
var beginT = 250;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.2)";
  ctx.fillRect(0,0,500,500);
};
var drawDot = function (x, y) {
  clearScreen();
  var size = 250;
  ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  ctx.strokeStyle = ''
  beginX = Math.random() * 900;
  if(beginX > 5000) {
    beginX = beginX*Math.Random();
    beginY = Math.random() * 900;
  }
  if (beginY > 5000) {
    beginY = beginY*Math.random();
  }
  ctx.fillRect(beginX, beginY, size, size);
};

var clearScreen2 = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.2)";
  ctx.fillRect(0,0,500,500);
};
var drawDot2 = function (x, y) {
  clearScreen();
  var size = 250;
  ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  ctx.strokeStyle = ''
  beginZ = Math.random() * 900;
  if(beginZ > 5000) {
    beginZ = Math.Random();
    beginT = Math.random() * 900;
  }
  if (beginT > 5000) {
    beginT = 350+100;
  }
  ctx.fillRect(beginZ, beginT , size, size);
};

setInterval(drawDot, 200);
setInterval(drawDot2, 200);
