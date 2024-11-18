// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 30;
let treeDepth = 6; // Global variable to track the depth

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  seed = random(100);
}

function draw() {
  background(255);
  randomSeed(seed);
  drawTree(width / 2, height * 0.9, 90, treeDepth); // Use the global depth variable
}

function drawTree(x1, y1, angle, depth) {
  strokeWeight(depth / 1.5);
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale;
    let y2 = y1 - sin(radians(angle)) * depth * scale;
    let den = map(mouseX, 0, width, 1, 30);

    // Draw the branch
    line(x1, y1, x2, y2);

    // Add a balloon only at depth level >= 7
    if (depth <= 3) {
      addLeaves(x2, y2, depth);
    }

    // Left branch
    drawTree(x2, y2, angle - den, depth - 1);

    // Middle branch
    drawTree(x2, y2, angle, depth - 1);

    // Right branch
    drawTree(x2, y2, angle + den, depth - 1);
  }
}

function addLeaves(x, y, depth) {
  // Draw a "balloon" at the specified location
  fill(random(255), random(255), random(255));
  noStroke();
  let balloonSize = depth * 4; // Adjust size based on depth
  ellipse(x, y, balloonSize, balloonSize * 1.5); // Balloon shape
  stroke(0);
  line(x, y + balloonSize * 0.75, x, y + balloonSize * 1.5); // String for balloon
}

function keyPressed() {
  if (key === 'z') {
    treeDepth = max(0, treeDepth + 1); // Increase depth (tree grows and more balloons are added)
  } else if (key === 'x') {
    treeDepth = max(0, treeDepth - 1); // Decrease depth but ensure it doesn't go below 0
  }
}
