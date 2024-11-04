// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circleDiameter = 60;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  mouseHead();
  mouseFace();
}
function mouseHead(){
  circle(mouseX, mouseY, circleDiameter);
  circle(mouseX + (circleDiameter * 2), mouseY, circleDiameter); 
  rect(mouseX, mouseY, circleDiameter*2, circleDiameter*2, 0, 0, 20, 20);
}

function mouseFace(){
  circle(mouseX + (circleDiameter / 2), mouseY + 40, circleDiameter - 25);
  circle(mouseX + (2*circleDiameter) - 30, mouseY + 40, circleDiameter - 25);
  arc(mouseX + (2*circleDiameter) - 30, mouseY + 70, 40, 10, (11 * PI) / 6);
}

