// Perlin Noise Challenge
// Michael Radomsky
// October 2, 2024

let rectWidth = 10; //initial width of the rectangles
let terrainInterval = .01;
let terrainTime = 5;
let totalHeight = 0;
let numRects = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(66, 203, 245);
  terrainTime = 5 + frameCount / 80;
  totalHeight = 0; // reset the total height for averaging
  numRects = 0; // reset the number of rectangles
  
  terrain();
  drawFlag();
  drawAverage(); // draw the average height line
}

function terrain() {
  let highestPeak = 0;
  let highestPeakx = 0;

  for (let x = 0; x <= width; x += rectWidth) {
    
    
    // Set mountains stroke color to black
    stroke(60, 64, 66);
    fill(60, 64, 66);
    
    
    let rectHeight = noise(terrainTime);
    rectHeight = map(rectHeight, 0, 1, 10, 600);
    
    // Update the total height and number of rectangles for average calculation
    totalHeight += rectHeight;
    numRects++;
    
    if (rectHeight > highestPeak) {
      highestPeak = rectHeight;
      highestPeakx = x;
    }
    
    rect(x, height, rectWidth, -rectHeight);
    terrainTime += terrainInterval;
  }
  
  drawFlag(highestPeakx, height - highestPeak);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rectWidth += 1;
  } else if (keyCode === LEFT_ARROW) {
    if (rectWidth > 1) {
      rectWidth -= 1;
    }
  }
}

function drawFlag(x, y) {
  stroke(1);
  fill(255, 0, 0);
  line(x, y, x, y - 50);
  rect(x, y - 50, 20, 20);
}

function drawAverage() {
  // Calculate the average height
  let averageHeight = totalHeight / numRects;
  
  // Draw the average line in blue
  stroke(255,0,0); // blue line for visibility
  line(0, height - averageHeight, windowWidth, height - averageHeight);
}
