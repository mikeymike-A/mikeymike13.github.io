// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPosition = 0;
let xSpeed = 0;
let circle1;
let circle2;
let circle3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  circle1 = new RoundRacer(500, 250);
  circle2 = new RoundRacer(300, 120);
  circle3 = new RoundRacer(540, 0);
}

function draw() {
  background(220);
  circle1.display();
  circle2.display();
  circle3.display();
  circle1.move();
  circle2.move();
  circle3.move();
}
class RoundRacer{
  constructor(yPosition, color){
    this.color = color;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.xPosition = xPosition;
    
  }
  move(){
    this.xPosition = this.xSpeed + this.xPosition;
    if(this.xPosition > windowWidth){
      this.xPosition = 0;
    }
  }
  display(){
    fill(this.color);
    circle(this.xPosition, this.yPosition, 10);
  }
}