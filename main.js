canvas= document.getElementById("myCanvas");
color="baby pink";
var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=4;
ctx.arc(240, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
 

var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=4;
ctx.arc(340, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth=4;
ctx.arc(440, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth=4;
ctx.arc(390, 240, 40, 0, 2 * Math.PI);
ctx.stroke();

var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth=4;
ctx.arc(290, 240, 40, 0, 2 * Math.PI);
ctx.stroke();