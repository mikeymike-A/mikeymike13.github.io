// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let bullets = [];
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();

  // Update and display all bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();

    // Remove bullets that are off-screen
    if (!bullets[i].isOnScreen()) {
      bullets.splice(i, 1);
    }
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.theImage = shipImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(LEFT_ARROW) === true){
      this.x -= 4;
    }
    if(keyIsDown(UP_ARROW) === true){
      this.y -= 4;
    }
    if(keyIsDown(RIGHT_ARROW) === true){
      this.x += 4;
    }
    if(keyIsDown(DOWN_ARROW) === true){
      this.y += 4;
    }
  }

  display() {
    // show the ship
    image(shipImage, this.x, this.y);
  }

  handleKeyPress() {
    // Fire a bullet when the space key is pressed
    if (key === ' ') {
      let bullet = new Bullet(this.x + shipImage.width / 2, this.y, 0, -5, bulletImage);
      bullets.push(bullet);
    }
  }
}

// ------------------------------------------------------------------------- //
// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = random(-0.6, 0.6);
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    // Move the bullet upward (or in the direction specified by dx, dy)
    this.x += this.dx;
    this.y += 3*this.dy;
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    return this.y > 0;
  }
}
