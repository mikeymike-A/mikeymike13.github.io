// Objects Demo 2
// Michael R
// October 15 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  frameRate(120);
  for(let i = 0; i < points.length; i++){
    points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}

class MiniPoint{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.c = color(random(255),random(255),random(255));
    this.s = random(10,30);
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.MAX_SPEED = 5;
  }




  display(){
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.s, this.s);
  }
  connectPoints(pointArray){
    stroke(this.c);
    for(let i = 0; i < pointArray.length; i++){
      if(this !== pointArray[i]){
        if(dist(this.x,this.y,pointArray[i].getX(),pointArray[i].getY())<100){
          line(this.x,this.y,pointArray[i].getX(),pointArray[i].getY());
        }
      }
    }
  }
  getX(){
    return this.x;
  }
  
  getY(){
    return this.y;
  }
  move(){
    let xSpeed = map(noise(this.noiseX),0,1,-this.MAX_SPEED,this.MAX_SPEED);
    let ySpeed = map(noise(this.noiseY),0,1,-this.MAX_SPEED,this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;

    //wrap around code
    if(this.x < 0){
      this.x += width;
    }
    if(this.x > width){
      this.x -= width;
    }
    if(this.y < 0){
      this.y += height;
    }
    if(this.y > height){
      this.y -= height;
    }

  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX, mouseY));
}
