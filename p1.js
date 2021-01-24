/*
Author: George Khankeldian
Project: CS 559 Programming Assignment 1
File: p1.js
*/

function setup() { "use strict";
  //variables for the canvas and sliders are created
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  var slider3 = document.getElementById('slider3');
  slider3.value = 0;
  var slider4 = document.getElementById('slider4');
  slider4.value = 0;

  function draw() {
    //variables for the canvas and sliders are created
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    var dx = slider1.value; // controls the amount of red in the squares
    var dy = slider2.value; // controls the amount of green in the squares
    var dz = slider3.value; // controls the amount of blue in the squares
    var da = slider4.value; // controls the movement of the squares and the stickbug

    //Note: Not every color can be made as expected with the sliders above because 
    //the color of the square is also partially determined by their position on the canvas/screen
    
    // method for creating rectangles/squares
    function drawRect(x, y, h, w, color) {
      context.beginPath();
      context.fillStyle = color;
      context.moveTo(x, y);
      context.lineTo(x + w, y);
      context.lineTo(x + w, y + h);
      context.lineTo(x, y + h);
      context.closePath();
      context.fill()
    }

    // method for creating the stickbug and handling its movement
    function StickBug(move) {
      move = (move - 180) / 4;

      context.strokeStyle = "black";
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(120 + move, 150 - move / 6);
      context.lineTo(220 + move, 175 - move / 6);
      context.lineTo(320 + move, 160 - move / 6);
      context.moveTo(170 + move, 160 - move / 6);
      context.lineTo(90 + move, 200 + move / 16);
      context.lineTo(80, 300);
      context.moveTo(170 + move, 160 - move / 4);
      context.lineTo(130 + move, 200 + move / 16);
      context.lineTo(130, 290);
      context.moveTo(210 + move, 170 - move / 4);
      context.lineTo(170 + move, 200 + move / 6);
      context.lineTo(185, 290);
      context.moveTo(210 + move, 170 - move / 4);
      context.lineTo(230 + move, 200 + move / 8);
      context.lineTo(225, 300);
      context.moveTo(280 + move, 165 - move / 4);
      context.lineTo(250 + move, 190 + move / 16);
      context.lineTo(235, 290);
      context.moveTo(280 + move, 165 - move / 4);
      context.lineTo(320 + move, 200 + move / 4);
      context.lineTo(330, 300);
      context.stroke();
    }

    // variables for the position and color of the squares used in the project
    var PosX;
    var PosY;
    var PosXColor;
    var PosYColor;

    // for loop that draws the rectangles, determines their location, and determines their color
    for(let i = 1; i <= 90; i++) {
      PosXColor = Math.cos(i * 4 % 360) * 200 + 200;
      PosYColor = Math.sin(i * 4 % 360) * 200 + 200;
      PosX = Math.cos((i + (da - 180) / 2) % 360) * 200 + 200;
      PosY = Math.sin((i + (da - 180) / 2) % 360) * 200 + 200;
      var currentColor = `rgb(${(PosXColor + (dx - 255)) / 4 % 255},${(PosYColor + (dy - 255)) / 4 % 255},${dz})`;
      drawRect(PosX, PosY, 20, 20, currentColor);
    }

    // function call to draw StickBug is called here
    StickBug(da);

    // draws text at the top middle of the screen
    context.fillStyle = "black";
    context.font = "30px Impact";
    context.fillText("GET STICKBUGGED LOL", 80, 100);
    
  }
  slider1.addEventListener("input",draw);
  slider2.addEventListener("input",draw);
  slider3.addEventListener("input",draw);
  slider4.addEventListener("input",draw);
  draw();
}
window.onload = setup;

