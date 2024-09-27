// Perlin Noise Demo
// Michael R
// Sept 17, 2024


//noise() vs random()


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(240);
  line(width/3,0,width/3,height);
  line(width*0.67,0,width*0.67,height);

  randomCircle();
}
function randomCircle(){
  let cSize = random(10, 200);
  circle(width*0.25,height/2,cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(round(cSize), width*0.25,height/2);
}