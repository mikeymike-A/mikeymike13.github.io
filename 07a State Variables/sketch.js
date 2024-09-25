// State Variables
// Michael R
// September 25, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let currentColor = 0; //0, 1, 2
let colorOne;
let circleSize = 50;
let growing =


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorOne = color(160,150,110)
}

function draw() {
  background(220);
  //circle code - fill color. using switch statement
  switch(currentColor){
    case 0:
      fill(255,0,0);
      break;
    case 1:
      fill(colorOne)
      break;
    case 2:
      fill(0, 50, 210);
      break;
  }
  if(frameCount % 1 === 0){
    currentColor += 1;
  if(currentColor > 2) currentColor = 0;
  //circle code - drawing the circle
  if(growing) circleSize += 2;
  else circleSize -= 2

  
  }
  circle(width/2, height/2, circleSize)

  }
