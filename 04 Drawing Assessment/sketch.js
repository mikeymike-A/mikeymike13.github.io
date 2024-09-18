// Drawing Assessment
// Michael
// September 16, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(700, 400);
  
}

function draw() {
  background(148, 186, 247);
  fill(237, 221, 43);
  noStroke(circle(50, 50, 40));
  fill(95, 217, 116); 
  noStroke(rect(0, 300, 700, 100));
  movableClouds();

}
function movableClouds(){
  fill(255, 255, 255);
  circle(mouseX, 80, 20)
  circle(mouseX + 7, 76, 20)
  circle(mouseX + 11, 80, 20)
}
