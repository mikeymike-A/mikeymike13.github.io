// Perlin Noise Challenge
// Michael Radomsky
// October 2, 2024

let rectWidth = 20; //initial width of the rectangles
let terrainInterval = .01;
let terrainTime = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  terrainTime = 5+frameCount/90
  terrain();
  drawFlag();
}

function terrain(){
  let highestPeak = 0;
  let highestPeakx = 0;
  for(let x = 0; x <= width; x += rectWidth){
    noFill();  
    let rectHeight = noise(terrainTime)
    rectHeight = map(rectHeight,0,1,10,255)
    if(rectHeight > highestPeak){
      highestPeak = rectHeight;
      highestPeakx = x;
    }
    rect(x,height,rectWidth,-rectHeight);
    terrainTime += terrainInterval;
  }
  drawFlag(highestPeakx, height-highestPeak)
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
      rectWidth += 1;
  }
  else if(keyCode === LEFT_ARROW){
    if(rectWidth > 1){
      rectWidth -= 1;
    }
    
  }
}
function drawFlag(x, y){
  stroke(1);
  fill(255, 0, 0);
  line(x, y, x, y-50);
  rect(x, y-50, 20, 20)
}