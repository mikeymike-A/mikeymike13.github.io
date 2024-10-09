// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  clockMin();
  clockHr();
  HrArm();
  minArm();
}

function clockMin(){
  push();
  translate(200,200);
  circle(0,0,150);
  angleMode(DEGREES);
  
  let minArm = map(1,0,width, 0,360);
  minArm = floor(minArm);
  for(let i = 0; i < 12; i++){
    line(50,0,75,0);
    rotate(360/12);
  }
  pop();
}
function clockHr(){
  push();
  noFill();
  translate(200,200);
  circle(0,0,150);
  angleMode(DEGREES);
  
  let hourArm = map(1,0,width, 0,360);
  hourArm = floor(hourArm);
  for(let i = 0; i < 60; i++){
    line(70,0,75,0);
    rotate(360/60);
  }
}
function HrArm(){
  rotate(frameCount/20);
  //rotate(1/3600) - optional for realistic speed
  let HrArm = map(1,0,width,0,360);
  HrArm = floor(HrArm);
  for(let i = 0; i < 1; i++){
    line(0,0,30,30);
  }
} 
function minArm(){
  rotate(frameCount/2);
  //rotate(1/60) - optional for realistic speed
  let minuteArm = map(1,0,width,0,360);
  minuteArm = floor(minuteArm)
  for(let i = 0; i < 1; i++){
    line(0,0,50,50)
  }
}