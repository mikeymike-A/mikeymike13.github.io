// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // We only want to draw it once
}

function draw() {
  background(220);
  let circleSize = 20; // Diameter of each circle
  let padding = 10; // Padding from the edges of the canvas

  // Draw top row of circles
  for (let x = padding; x < width - padding; x += circleSize + padding) {
    ellipse(x, padding, circleSize, circleSize);
    line(x, padding, mouseX, mouseY);
  }

  // Draw bottom row of circles
  for (let x = padding; x < width - padding; x += circleSize + padding) {
    ellipse(x, height - padding, circleSize, circleSize);
    line(x, height - padding, mouseX, mouseY);
  }

  // Draw left column of circles
  for (let y = padding; y < height - padding; y += circleSize + padding) {
    ellipse(padding, y, circleSize, circleSize);
    line(padding, y, mouseX, mouseY);
  }

  // Draw right column of circles
  for (let y = padding; y < height - padding; y += circleSize + padding) {
    ellipse(width - padding, y, circleSize, circleSize);
    line(width - padding, y, mouseX, mouseY);
  }
}
function mouseMoved(){
  redraw();
}
