// Buster
//
// A class that represents a simple Buster
// controlled by the arrow keys. It can move around
// the screen and consume ghost objects to maintain its health.

class Buster {

  // constructor
  //
  // Sets the initial values for the Buster's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y) {
    // Position
    // The player cannot go past the top and bottom of the screen
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.walk = 7
    this.sprint = 12;
    // Health properties
    this.maxHealth = 200;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.dmg = 1;
    this.radius = 75;
    this.ghostCaught = 0;
    // Input properties
    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;

    this.img = loadImage('assets/images/ghostbuster.png');
    this.beam = loadSound('assets/sounds/beam.mp3');


    this.healthBar =0;
    this.healthFill =0;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the Buster's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }

    if(keyIsDown(32)){
      this.speed = this.sprint;
    } else {
      this.speed = this.walk;
    }

  }

  // move
  //
  // Updates the position according to velocity
  // Lowers health (as a cost of living)
  // Handles wrapping
  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the Buster has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    constrain(this.y, 0, height);
  }

  fireProton(ghost){
    push();
    if (mouseIsPressed) {
      strokeWeight(6);
      stroke(200, 0, 0);
      line(this.x, this.y - this.radius/2, mouseX + random(-5,5), mouseY + random(-5,5));
      strokeWeight(2);
      stroke(0, 68, 186);
      line(this.x, this.y - this.radius/2, mouseX + random(-10,10), mouseY + random(-10,10));
      stroke(random(255), random(255), random(255));
      line(this.x, this.y - this.radius/2, mouseX + random(-15,15), mouseY + random(-15,15));
      // Calculate distance from this Buster to the ghost
      let d = dist(mouseX, mouseY, ghost.x, ghost.y);
      // Check if the distance is less than their two radii (an overlap)
      if (d <  ghost.radius + 10) {
        // Decrease ghost health by the same amount
        ghost.health -= this.dmg;
        if (ghost.health <= 10){
          ghost.kill(this);
        }
      }
    }
    pop();
  }



  // display
  //
  // Draw the Buster as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.radius, this.radius);
    pop();

    this.healthBar = map(this.health, 0, this.maxHealth, 0, width /2);
    this.healthFill = map(this.health, 0, 100, 255, 0);

    push();
      fill(this.healthFill, 100, 30);
      rectMode(CENTER, CENTER);
      rect(width / 2, height - 40, this.healthBar, 20);
    pop();
  }

}
