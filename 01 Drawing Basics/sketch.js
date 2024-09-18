// Drawing Basics
// Michael R
// Sept 11, 2024
//
// 2D Primitives


function setup() { //Happens once at start
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0, 0, 255)
  circle(0,0,50);
  fill(150, 255, 90)
  circle(100, 50, 30);
}
function drawCircles(){
  fill(101, 0, 255);
  circle(0, 0, 50);

  fill(101, 0, 255);
  circle(400, 400, 50);

  fill(101, 0, 255);
  circle(400,-400, 50);

  fill(101, 0, 254);
  circle (0, -400, 50)

  fill (234, 23, 111);
  circle(200, -200, 50);

}
setup()
drawCircles()