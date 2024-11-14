// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tiles = [];
let level = [
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 1, 1]
];

const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX = 0, playerY = 0;  // Initialize player position

function preload() {
  for (let i = 0; i < 3; i++) {
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2;  // Place the player on the grid
}

function draw() {
  renderBoard();
}

function renderBoard() {
  for (let col = 0; col < COLUMNS; col++) {
    for (let row = 0; row < ROWS; row++) {
      let pos = level[row][col];
      let currentImage = tiles[pos];
      if (currentImage) {  // Check if the image is loaded
        image(currentImage, col * TILE_SIZE, row * TILE_SIZE);
      }
    }
  }
}

function swap(x1, y1, x2, y2){
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (playerY > 0) {
      if (level[playerY - 1][playerX] === 0) {
        // Move cow up
        swap(playerX, playerY, playerX, playerY - 1);
        playerY--;
      } else if (level[playerY - 1][playerX] === 1 && playerY > 1 && level[playerY - 2][playerX] === 0) {
        // Push one chicken up
        swap(playerX, playerY - 1, playerX, playerY - 2);
        swap(playerX, playerY, playerX, playerY - 1);
        playerY--;
      }
    }
  }
  
  if (keyCode === DOWN_ARROW) {
    if (playerY < ROWS - 1) {
      if (level[playerY + 1][playerX] === 0) {
        // Move cow down
        swap(playerX, playerY, playerX, playerY + 1);
        playerY++;
      } else if (level[playerY + 1][playerX] === 1 && playerY < ROWS - 2 && level[playerY + 2][playerX] === 0) {
        // Push one chicken down
        swap(playerX, playerY + 1, playerX, playerY + 2);
        swap(playerX, playerY, playerX, playerY + 1);
        playerY++;
      }
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (playerX > 0) {
      if (level[playerY][playerX - 1] === 0) {
        // Move cow left
        swap(playerX, playerY, playerX - 1, playerY);
        playerX--;
      } else if (level[playerY][playerX - 1] === 1 && playerX > 1 && level[playerY][playerX - 2] === 0) {
        // Push one chicken left
        swap(playerX - 1, playerY, playerX - 2, playerY);
        swap(playerX, playerY, playerX - 1, playerY);
        playerX--;
      }
    }
  }

  if (keyCode === RIGHT_ARROW) {
    if (playerX < COLUMNS - 1) {
      if (level[playerY][playerX + 1] === 0) {
        // Move cow right
        swap(playerX, playerY, playerX + 1, playerY);
        playerX++;
      } else if (level[playerY][playerX + 1] === 1 && playerX < COLUMNS - 2 && level[playerY][playerX + 2] === 0) {
        // Push one chicken right
        swap(playerX + 1, playerY, playerX + 2, playerY);
        swap(playerX, playerY, playerX + 1, playerY);
        playerX++;
      }
    }
  }
}
