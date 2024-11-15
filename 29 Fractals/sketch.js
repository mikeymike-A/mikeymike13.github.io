// Drawing with fractals
// Michael
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // circleInCircle(width/2,height/2,width);
  // cantor(width*0.1, height*0.3, width*0.8, 6);
  circleFractal(width/2, height/2, height/1.5);
  squareFractal(width/2, height/2, height/1.5)
}
function cantor(x,y,len,depth){
  if(depth > 0){
    line(x,y,x+len,y);
    let newY = y + 20;
    cantor(x, newY, len/3, depth-1);
    cantor(x + 2/3*len, newY, len/3, depth-1);
  }
}
function circleInCircle(x, y, d){
  if(d > 10){
    circle(x, y, d);
    let den = map(mouseX,0,width,1.01,1.5);
    circleInCircle(x, y, d/den);
  }
}
function circleFractal(x,y,d){
  if(d>2){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y+d/2, d/2);
  }
}

function squareFractal(x, y, len){
  if(len > 10){
    rectMode(CENTER);
    fill(random(255), random(255), random(255));
    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,len);
    pop();
    squareFractal(x - len/2, y - len/2, len/2);
    squareFractal(x + len/2, y+len/2, len/2);
    squareFractal(x-len/2, y+ len/2, len/2);
    squareFractal(x+len/2, y - len/2, len/2);
  }
}