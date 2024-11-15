// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  drawTree(width / 2, height * 0.9, 90, 6);
  addLeaves();
}

function drawLine(x1, y1, x2, y2, depth) {
  // Draw a line segment connecting (x1, y1) to (x2, y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale;
    let y2 = y1 - sin(radians(angle)) * depth * scale;
    let den = map(mouseX, 0, width, 1, 30);

    drawLine(x1, y1, x2, y2, depth);

    // Left branch
    drawTree(x2, y2, angle - den, depth - 1);
    
    // Middle branch
    drawTree(x2, y2, angle, depth - 1);

    // Right branch
    drawTree(x2, y2, angle + den, depth - 1);
  }
}
function addLeaves(x1, y1, d){
  let x = cos(radians(angle))*depth*
  fill(random(255), random(255), random(255));
  circle(x, y, d)
  

}