let eastBound = [];
let westBound = [];
let trafficLight;
let lightState = "green"; // Start with green light
let lightTimer = 0; // Timer to manage the red light duration

function setup() {
  createCanvas(windowWidth, windowHeight);
  trafficLight = new TrafficLight(); // Create traffic light
}

function mouseClicked() {
  if (keyIsPressed && keyCode === SHIFT) {
    // Westbound cars (top lane, going right to left)
    westBound.push(new Vehicle(0, random(height / 3 + 10, height / 2 - 50), 1));
  } else {
    // Eastbound cars (bottom lane, going left to right)
    eastBound.push(new Vehicle(width - 100, random(height / 2 + 10, height / 3 + height / 3 - 50), 0));
  }
}

function draw() {
  background(220);
  roadFill();

  // Draw traffic light
  trafficLight.display();

  // Manage cars regardless of traffic light state
  for (let i = 0; i < eastBound.length; i++) {
    eastBound[i].action();
  }
  for (let i = 0; i < westBound.length; i++) {
    westBound[i].action();
  }

  // Timer for red light (3 seconds)
  if (lightTimer > 0) {
    lightTimer -= deltaTime / 1000; // Reduce the timer by the time passed in seconds
    if (lightTimer <= 0) {
      lightState = "green"; // Change back to green after 3 seconds
    }
  }
}

function roadFill() {
  fill(0);
  noStroke();
  // Draw road
  rect(0, height / 3, width, height / 3);
  
  // Draw lane dividers
  stroke(240, 213, 14);
  strokeWeight(5);
  line(0, height / 2, width, height / 2); // Middle line
  stroke(255); // White side lines
  line(0, height / 3 + 10, width, height / 3 + 10);  // Top lane boundary
  line(0, height / 3 + height / 3 - 10, width, height / 3 + height / 3 - 10);  // Bottom lane boundary
}

// Traffic light class
class TrafficLight {
  constructor() {
    this.x = width / 2;
    this.y = height / 4;
  }

  display() {
    fill(0);
    rect(this.x, this.y, 40, 100); // Traffic light pole
    
    if (lightState === "green") {
      fill(0, 255, 0); // Green light
    } else {
      fill(255, 0, 0); // Red light
    }
    ellipse(this.x + 20, this.y + 50, 30); // Light bulb
  }
}

// Vehicle class
class Vehicle {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.dir = dir;
    this.type = int(random(2));
    this.xSpeed = random(3, 6);
  }

  action() {
    this.display();
    this.move();
    this.speedChange();
  }

  display() {
    if (this.type === 0) {
      this.drawCar();
    } else if (this.type === 1) {
      this.drawTruck();
    }
  }

  drawCar() {
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }

  drawTruck() {
    fill(this.c);
    rect(this.x, this.y, 150, 60);  // Larger truck size for differentiation
  }

  move() {
    if (lightState === "green") { // Only move if the light is green
      if (this.dir === 0) {
        // Eastbound (left to right) cars
        this.x -= this.xSpeed;
        if (this.x < -100) {
          this.x = width; // Respawn at right edge
        }
      } else if (this.dir === 1) {
        // Westbound (right to left) cars
        this.x += this.xSpeed;
        if (this.x > width + 100) {
          this.x = 0; // Respawn at left edge
        }
      }
    }
  }

  speedChange() {
    if (random(1) < 0.01) {
      if (random(1) < 0.5) {
        this.speedUp();
      } else {
        this.speedDown();
      }
    }
  }

  speedUp() {
    this.xSpeed = constrain(this.xSpeed + random(0.5, 2), 3, 15); // Speed up but limit to max 15
  }

  speedDown() {
    this.xSpeed = constrain(this.xSpeed - random(0.5, 2), 3, 15); // Slow down but limit to min 3
  }
}

// Handle spacebar to turn red light on
function keyPressed() {
  if (key === ' ') {
    lightState = "red"; // Change light to red
    lightTimer = 3; // Set the red light for 3 seconds
  }
}
