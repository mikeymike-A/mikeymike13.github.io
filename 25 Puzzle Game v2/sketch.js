// Description: This program generates a grid-based game where each cell can be flipped between 0 and 255. 
// When all cells have the same value (either all 0 or all 255), a win condition is met and displays "You Win".
// The game board is randomized at the start, and cells can be flipped individually or in a cross pattern with a mouse click.

let NUM_ROWS = 10;
let NUM_COLS = 10;
let rectWidth, rectHeight;
let currentRow, currentCol;
let newGrid = [];

function setup() {
  createCanvas(500, 500);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomGrid();   // Randomize the board at the start
}

function draw() {
  background(220);
  determineActiveSquare();   // Figure out which tile the mouse cursor is over
  drawGrid();                // Render the current game board to the screen
  winCondition();            // Check for win condition
  overLay();                 // Set an overlay to show which squares are affected by the click
}

function mousePressed() {
  if (keyIsDown(32)) {
    // Flip a 2x2 area when SPACE is held
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow + 1);
    flip(currentCol + 1, currentRow + 1);
  } else if (keyIsDown(SHIFT) && mouseIsPressed) {
    flip(currentCol, currentRow);  // Flip only the selected cell if SHIFT is held
  } else {
    // Default cross-shaped pattern
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
}

function flip(col, row) {
  // Flip value from 0 to 255 or 255 to 0 for a specific cell if it's in bounds
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    newGrid[row][col] = newGrid[row][col] === 0 ? 255 : 0;
  }
}

function determineActiveSquare() {
  // Determines the grid cell the mouse is currently over
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  stroke(50);  // Set stroke color for grid borders
  strokeWeight(2);  // Define border thickness
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(newGrid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() {
  // Check if all elements in newGrid are identical (either all 0 or all 255)
  let firstValue = newGrid[0][0];
  let allIdentical = newGrid.every(row => row.every(value => value === firstValue));
  
  if (allIdentical) {
    textSize(32);
    fill(firstValue === 0 ? 255 : 0); // White text on black background, black text on white background
    textAlign(CENTER, CENTER);
    text("You Win", width / 2, height / 2);
  }
}

function randomGrid() {
  // Randomize the board by setting each cell to either 0 or 255 at random
  newGrid = []; // Reset the grid
  for (let i = 0; i < NUM_ROWS; i++) {
    let rowArray = [];
    for (let j = 0; j < NUM_COLS; j++) {
      rowArray.push(random([0, 255]));
    }
    newGrid.push(rowArray);
  }
}

function overLay() {
  // Initialize affected squares based on active pattern: 2x2 or cross
  let affectedSquares = [];
  
  if (keyIsDown(32)) {
    // Add the 2x2 area if SPACE is pressed
    affectedSquares.push([currentCol, currentRow]);
    affectedSquares.push([currentCol + 1, currentRow]);
    affectedSquares.push([currentCol, currentRow + 1]);
    affectedSquares.push([currentCol + 1, currentRow + 1]);
  } else if (keyIsDown(SHIFT)) {
    // Only highlight the single cell when SHIFT is held
    affectedSquares.push([currentCol, currentRow]);
  } else {
    // Default cross pattern
    affectedSquares.push([currentCol, currentRow]);
    affectedSquares.push([currentCol - 1, currentRow]);
    affectedSquares.push([currentCol + 1, currentRow]);
    affectedSquares.push([currentCol, currentRow - 1]);
    affectedSquares.push([currentCol, currentRow + 1]);
  }

  // Log the affected squares for debugging


  // Overlay the affected squares with a distinct color for better visibility
  noStroke();
  fill(0, 150, 0, 150); // Semi-transparent red for visibility
  affectedSquares.forEach(([col, row]) => {
    if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
      rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
    }
  });
}
