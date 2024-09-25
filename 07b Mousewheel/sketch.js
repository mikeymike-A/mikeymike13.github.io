// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y; //position
let w = 50; //height

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  noFill();
}

function draw() {
  background(220);
  x = mouseX, y = mouseY;
  circle(x,y,w);
}

function mouseWheel(event){
  print(event.delta);
  if(event.delta > 0){
    w -= 10;
    if(w < 10) w = 10;
  }
  else w += 10
}
