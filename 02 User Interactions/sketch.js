// User Events
// Michael R.
// September 12th, 2024
//


let tSize = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
if(mousePressed) { tSize = (20,40)
}

function draw() {
  background(220);
  textSize(tSize)
  text((mouseX + ", " + mouseY), mouseX, mouseY);

  fill(0,255,0)
}
function mouseClicked() {
 if mousePressed() {
  tSize = tSize + 4
 }
}