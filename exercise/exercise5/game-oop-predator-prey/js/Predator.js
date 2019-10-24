// Predator
//
// A class that represents a simple predator
// controlled by the arrow keys. It can move around
// the screen and consume Prey objects to maintain its health.

class Predator {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(monster, x, y, speed, sprintSpeed, fillColor, radius, up, down, left, right, sprint) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.movement = speed;
    this.speed = speed;
    this.sprintSpeed = sprintSpeed;
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health; // Radius is defined in terms of health
    this.img = monster;
    // Input properties
    this.upKey = up;
    this.downKey = down;
    this.leftKey = left;
    this.rightKey = right;
    this.sprintKey = sprint;
    // Track the number of prey eaten
    this.preyEaten = 0;
    // Represents how many prey was eaten
    this.rage = 0;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    // Sprinting
    if (keyIsDown(this.sprintKey)) {
      this.movement = this.sprintSpeed;
    }
    else {
      this.movement = this.speed;
    }
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.movement;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.movement;
    }
    else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.movement;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.movement;
    }
    else {
      this.vy = 0;
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
    // Update health
    this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the predator has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  // handleEating
  //
  // Takes a Prey object as an argument and checks if the predator
  // overlaps it. If so, reduces the prey's health and increases
  // the predator's. If the prey dies, it gets reset.
  handleEating(prey) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, prey.x, prey.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + prey.radius) {
      // Increase predator health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      // Decrease prey health by the same amount
      prey.health -= this.healthGainPerEat;
      // Check if the prey died and reset it if so
      if (prey.health <= 0) {
        prey.reset();
        this.preyEaten += 2;
      }
    }
  }

  // display
  //
  // Draw the predator as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    // limit the size of the predators
    constrain(this.radius, 10, this.maxHealth);
    push();
    imageMode(CENTER);
    noStroke();
    this.radius = this.health;
    image(this.img,this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
    // Display a translucid circle growing by eating preys
    push();
    noStroke();
    fill(200,0,0,150);
    this.rage = map(this.preyEaten, 0, 20, 0, this.radius);
    ellipse(this.x, this.y,this.rage);
    pop();
    // // Display the number of prey eaten on the predator
    // push();
    // textAlign(CENTER,CENTER)
    // textSize(32);
    // text(this.preyEaten,this.x,this.y);
    // pop();
  }
}
