import player from "./player.js";

var canvas = document.getElementById("main_canvas");
canvas.width = 1920;
canvas.height = 1080; 
canvas.style.background = '#FFAC9E';

var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "../assets/Ship.png";
img.onload = function () {
    ctx.drawImage(img, 0, 0);
}


