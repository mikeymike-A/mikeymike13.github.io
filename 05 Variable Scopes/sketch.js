// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(120);
   if(mouseIsPressed){ 
    fill(0);
    noStroke(circle(mouseX, mouseY, 20,));
   }
   if(keyIsDown(67)){
    clear();
   }
}


