var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var GeorgeR = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

/*GeorgeR.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}
*/

GeorgeR.drawArm = function(ctx, left) {
  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1+25);
  ctx.lineTo(x0,y2);
  ctx.stroke();
  ctx.lineWidth=50;
};

GeorgeR.drawArm2 = function(ctx, right) {
  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1+25);
  ctx.lineTo(x3,y2);
  ctx.stroke();


};


GeorgeR.drawLeg = function(ctx, left) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y2+50);
  ctx.lineTo(x0,y3);
  ctx.stroke();


};

GeorgeR.drawLeg2 = function(ctx, right) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y2+50);
  ctx.lineTo(x3,y3);
  ctx.stroke();


};

GeorgeR.drawBody = function(ctx, body) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1-10);
  ctx.lineTo(horizontalCenter,y2+50);
  ctx.stroke();
  ctx.lineWidth=50

};



GeorgeR.drawTop = function(ctx) {
  // draw a round head:
   ctx.beginPath();
   ctx.arc(horizontalCenter, 120, 120, 0, circleDegrees);
   ctx.fill();
  //drawImage('head.jpg', ctx, 0, 0);


};

GeorgeR.drawMiddle = function(ctx) {
  GeorgeR.drawArm(ctx, true);
  GeorgeR.drawArm(ctx, false);
  GeorgeR.drawArm2(ctx, true);
  GeorgeR.drawArm2(ctx, false);
  GeorgeR.drawBody(ctx, true);
  GeorgeR.drawBody(ctx, false);
  // draw the rest of the body...
};

GeorgeR.drawBottom = function(ctx) {
  GeorgeR.drawLeg(ctx, true);
  GeorgeR.drawLeg(ctx, false);
  GeorgeR.drawLeg2(ctx, true);
  GeorgeR.drawLeg2(ctx, false);
};

GeorgeR.drawCorpse = function(ctx) {
  GeorgeR.drawTop(ctx);
  GeorgeR.drawMiddle(ctx);
  GeorgeR.drawBottom(ctx);
  GeorgeR.drawGrid(ctx);
};

window.GeorgeR = GeorgeR;
