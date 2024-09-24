// Drawing Assessment
// Michael
// September 16, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let bgColor;    // Variable to store background color
let sunColor;   // Variable to store sun or moon color
let cloudColor; // Variable to store cloud color
let grassColor; // Variable to store grass color
let isRaining = false;
let raindrops = [];

function setup() {
  createCanvas(700, 400);
  setDayColors();  // Initialize default colors for daytime
}

function draw() {
  background(bgColor);  // Use the current background color

  // Draw sun or moon
  fill(sunColor);
  noStroke();
  circle(50, 50, 40);

  // Draw grass
  fill(grassColor);
  noStroke();
  rect(0, 300, 700, 100);

  // Draw clouds
  movableClouds();

  //Add signature
  artistSignature();
}
function movableClouds() {
  fill(cloudColor);  // Use current cloud color
  circle(mouseX, 80, 50);
  circle(mouseX + 14, 90, 50);
  circle(mouseX - 16, 90, 50);
  circle(mouseX + 64, 70, 50);
  circle(mouseX + 75, 61, 50);
  circle(mouseX + 86, 70, 50);
}

function keyPressed() {
  if (keyCode === 78) {  // N key (Nighttime)
    setNightColors();    // Set night theme colors
  } else if (keyCode === 68) {  // D key (Daytime)
    setDayColors();      // Set day theme colors
  } else if (keyCode === 82) { // R key (Rainy)
    setRainColors();   //Set rain theme colors
  }
}

function setDayColors() {
  bgColor = color(148, 186, 247);   // Light blue sky
  sunColor = color(237, 221, 43);   // Yellow sun
  cloudColor = color(255, 255, 255); // White clouds
  grassColor = color(95, 217, 116); // Bright green grass
}

function setNightColors() {
  bgColor = color(7, 28, 63);       // Dark blue sky
  sunColor = color(200, 200, 200);  // Light gray moon
  cloudColor = color(100, 100, 100); // Dark gray clouds
  grassColor = color(0, 50, 0);     // Very dark green grass
}
function setRainColors() {
  bgColor = color(100, 100, 150);   // Grayish blue rainy sky
  sunColor = color(154, 145, 27);  // Darkened sun during rain
  cloudColor = color(150, 150, 150); // Rainy-gray clouds
  grassColor = color(50, 100, 50);  // Darker grass during rain
}
function artistSignature(){
  fill(0);
  text("Michael", 650, 370, 40, 20)
}
