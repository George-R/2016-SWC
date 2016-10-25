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


GeorgeR.drawArm = function(ctx, left) {
  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1+50);
  ctx.lineTo(horizontalCenter-100,y1+50);
  ctx.stroke();
  ctx.lineWidth=50;
};

GeorgeR.drawArmL = function(ctx, left) {
  ctx.beginPath();
  ctx.moveTo(horizontalCenter-82,y1+44);
  ctx.lineTo(horizontalCenter-150,y1+100);
  ctx.stroke();
  ctx.lineWidth=50;
};

GeorgeR.drawArm2 = function(ctx, right) {
  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1+50);
  ctx.lineTo(x3,y1+50);
  ctx.stroke();


};

GeorgeR.drawHip = function(ctx, left) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter-40,y2+20);
  ctx.lineTo(horizontalCenter+40,y2+20);
  ctx.stroke();

}

GeorgeR.drawTorso = function(ctx, body) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter-30,y1+40);
  ctx.lineTo(horizontalCenter-30,y2+40);
  ctx.stroke();
}

GeorgeR.drawTorsoR = function(ctx, body) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter+30,y1+40);
  ctx.lineTo(horizontalCenter+30,y2+40);
  ctx.stroke();
}

GeorgeR.drawLeg = function(ctx, left) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter-25,y2-5);
  ctx.lineTo(horizontalCenter-80,y3);
  ctx.stroke();


};

GeorgeR.drawLeg2 = function(ctx, right) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter+10,y2+6.5);
  ctx.lineTo(horizontalCenter+120,y2+120);
  ctx.stroke();


};

GeorgeR.drawBody = function(ctx, body) {

  ctx.beginPath();
  ctx.moveTo(horizontalCenter,y1-10);
  ctx.lineTo(horizontalCenter,y2+40);
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
  GeorgeR.drawArmL(ctx, true);
  GeorgeR.drawArmL(ctx, false);
  GeorgeR.drawArm2(ctx, true);
  GeorgeR.drawArm2(ctx, false);
  GeorgeR.drawBody(ctx, true);
  GeorgeR.drawBody(ctx, false);
  GeorgeR.drawTorso(ctx, true);
  GeorgeR.drawTorso(ctx, false);
  GeorgeR.drawTorsoR(ctx, true);
  GeorgeR.drawTorsoR(ctx, false);
  // draw the rest of the body...
};

GeorgeR.drawBottom = function(ctx) {
  GeorgeR.drawHip(ctx, true);
  GeorgeR.drawHip(ctx, false);
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
