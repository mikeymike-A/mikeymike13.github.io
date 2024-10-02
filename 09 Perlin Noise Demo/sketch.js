// Perlin Noise Demo
// Michael R
// Sept 17, 2024


//noise() vs random()
let circleTime = 5;
let circleInterval = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(240);
  line(width/3,0,width/3,height);
  line(width*0.67,0,width*0.67,height);
  //random()
  randomCircle();
  noiseCircle();
  staircase();
}
function randomCircle(){
  let cSize = random(10, 200);
  fill(cSize, cSize/2, 255-cSize);
  circle(width*0.25,height/2,cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(round(cSize), width*0.25,height/2);
}
function noiseCircle(){
  // draw a circle using noise() for random diameter and color
  let cSize = noise(circleTime);
  cSize = map(cSize, 0, 1, 10, 255);
  circle(width*0.75, height/2, cSize)
  text(round(cSize), width*0.75,height/2);
  circleTime += circleInterval;
}

function staircase(){
  let rectWidth = 20;
  for(let x = 0; x <= width; x += 20){
  
    let rectHeight = random(60, 80);
    noFill();
    rect(x, height, rectWidth, -rectHeight);
    
  }



}