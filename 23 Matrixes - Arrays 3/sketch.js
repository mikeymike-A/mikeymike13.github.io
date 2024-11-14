// Matrixes
// Michael Radomsky
// October 28, 2024

let grid = [[0,255,120,264,230],[0,123,244,211,255],[33,246,243,234,245]];
const NUM_ROWS = 3;
const NUM_COLS = 5;
let rectWidth, rectHeight;

function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500 / NUM_COLS;
  rectHeight = 300 / NUM_ROWS;
}
function getArrayX(){
  return int(mouseX/rectWidth);
}
function getArrayY(){
  return int(mouseY/rectHeight);
}

function draw() {
  background(220);
  renderGrid();
 
}
function mousePressed(){
  if(grid[getArrayY()][getArrayX()] === 255){
    grid[getArrayY()][getArrayX()] = 0;
  }
  else{
    grid[getArrayY()][getArrayX()] = 255;
  }
    
}
