// Cars cars cars
// Michael R
// October 18, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastBound = [];
let westBound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  eastBound.push(new Vehicle(0, mouseY, 0));
  westBound.push(new Vehicle(width, mouseY, 1));
}

function draw() {
  background(220);
  roadFill();
  for(let i = 0; i < eastBound.length; i++){
    eastBound[i].action();
  }
}
function roadFill(){
  fill(0);
  noStroke();
  rect(0,height/3,width,height/3);
  stroke(240, 213, 14);
  strokeWeight(5);
  line(0, height/2, width, height/2);
}


class Vehicle{
  constructor(x, y, dir){
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.dir = dir;
    this.type = int(random(2));
    this.xSpeed = random(3, 6);
  }
  action(){
    this.display();
  }

  display(){
    if(this.type === 0){
      this.drawCar();
    }
    else if(this.type === 1){
      this.drawTruck();
    }

  }
  drawCar(){
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }
  drawTruck(){
    fill(this.c);
    ellipse(this.x, this.y, 100, 40);
  }
  move(){
    if(this.dir === 0){
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = width;
      }
    }
    else if(this.dir === 1){
      this.x -= this.xSpeed;
      if(this.x < width){
        this.x = width;
      }
    }
  }
}