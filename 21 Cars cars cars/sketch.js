// Cars cars cars
// Michael R
// October 18, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  roadFill();
}
function roadFill(){
  fill(0);
  noStroke();
  rect(0,height/3,width,height/3);
  stroke(240, 213, 14);
  strokeWeight(5);
  line(0, height/2, width, height/2);
}

class Car{
  constructor(x, y, color, speed){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.s = speed;
  }
}

class Truck{
  constructor(x, y, color, speed){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.speed = speed;
  }
}