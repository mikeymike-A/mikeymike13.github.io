// // Drawing Challenge
// // Michael R
// // September 13 2024
// //

let x = 300; // initial x position
let y = 300; // initial y position

function setup() {
  createCanvas(600, 600); // Set up the canvas size
}

function draw() {
  background(255); // Clear the screen with a white background
  theAlien(); // Draw the alien at the updated position
}

function mainBody() {
  fill(170, 255, 170, 255);
  noStroke();
  circle(x, y, 50); // Adjusted for x, y positions
  noStroke();
  rect(x - 25, y, 50, 35); // Adjust based on x, y
}

function eyesPlusMouth() {
  fill(0, 0, 0, 255);
  noStroke();
  circle(x - 13, y, 3); // Adjusted for x, y positions
  circle(x + 13, y, 3); // Adjusted for x, y positions
  noStroke();
  rect(x - 15, y + 13, 30, 1); // Adjust based on x, y
}

function theLegs() {
  fill(255, 255, 255, 255);
  noStroke();
  rect(x - 19, y + 25, 38, 10); // Adjust based on x, y
}

function keyMike() {
  if(keyIsPressed){
  // Move the alien based on key press
    if (keyCode === LEFT_ARROW) {
      x -= 10; // Move left
    } else if (keyCode === RIGHT_ARROW) {
      x += 10; // Move right
    } else if (keyCode === UP_ARROW) {
      y -= 10; // Move up
    } else if (keyCode === DOWN_ARROW) {
      y += 10; // Move down
    }

  }
  
}

function theAlien() {
  mainBody();
  eyesPlusMouth();
  theLegs();
  keyMike();
}
