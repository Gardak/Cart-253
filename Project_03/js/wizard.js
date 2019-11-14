

// Wizard

class Wizard {

  constructor(x, y) {

    // starting Position
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
    this.health = this.maxHealth;

    // Input properties
    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;

    // Display properties
    this.healthBar =0;
    this.healthFill =0;
    this.size = 50;
    this.color = color(60, 6, 186);

    this.fireBall = new Ball();

  }


  handleMovement() {

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

    // Sprint movement
    if(keyIsDown(32)){
      this.speed = this.sprint;
    } else {
      this.speed = this.walk;
    }

  }

lauchFireBall(fireBall){
  if (mouseIsPressed){
      this.fireBall.spawn(this);

  } else if (this.fireBall.radius >= 50 && this.fireBall.launched === false) {
    this.fireBall.launch();
  } else if (this.fireBall.radius >= 50){
  this.fireBall.move();
  }

}


  move() {

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Handle wrapping
    this.handleCollision();

  }


  handleCollision() {
    // Off the left or right
    if (this.x > width) {
      this.x = width;
    }
    else if (this.x < 0) {
      this.x = 0;
    }

    // Off the top or bottom
    if (this.y > height) {
      this.y = height;
    }
    else if (this.y < 0) {
      this.y = 0;
    }

  }

display() {
    push();
      noStroke();
      fill(this.color);
      rectMode(CENTER);
      rect(this.x, this.y, 50, 50);
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
