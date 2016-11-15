var ctx = document.getElementById("snowc").getContext('2d');
var height = 505;
var width = 1000;
var points = [];
var numPoints = 500;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,50%,100%,1)";
  ctx.fillRect(0, 0, 500, 500);
};

var wrap = function(point) {
  if (point.x > width) {
    point.x = 0;
    point.y = point.y + 11;
  }
  if (point.y > height) {
    point.y = 0;
  }
  if (point.y < 0) {
    point.y = height;
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.70) { // move up
    p.y = p.y - speed;
  } else if (direction < 0.80) {
    p.x = p.x - speed;
  } else if (direction < 0.90) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
}

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};
var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var hue = point.y / 5 + 100;
    move(point);
    wrap(point);
    ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
    ctx.fillRect(point.x, point.y, point.size, point.size);
  }
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    var size = Math.random() * 5;
    var x = Math.random() * 1000;
    var speed = 0 - size;
    points.push({
      x: x,
      y: 10,
      size: size,
      speed: speed
    });
  }
};

makePoints();
requestAnimationFrame(drawPoints);
