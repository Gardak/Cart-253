

class Boss {


  constructor(){
    // Position
    this.x = width/2;
    this.y = height/4;
    // Velocity and speed
    this.vx = 10;
    this.vy = 5;
    this.speed = 10;
    this.dmg = 5;
    // Display properties
    this.img = loadImage('assets/images/slimer.png');
    this.radius = 500;
  }

  spawn(){
    this.spawn ++;
    push();
    noStroke();
    tint(250,80);
    fill(250,20,10);
    ellipse(this.x, this.y, this.spawn/4, 10);
    pop();
    if (this.spawn < 100){
      ellipse(this.x, this.y, this.spawn/3, 10);
    }
    if (this.spawn < 200) {
      ellipse(this.x, this.y, this.spawn/2, 10);
    }
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

    handleWrapping();
  }

  handleWrapping() {
    if (this.x < width/5) {
      this.x = this.x * (-1);
    }
    else if (this.x > width * 4/5) {
      this.x = this.x * (-1);
    }
    // Bounce off the top or bottom
    if (this.y < 0) {
      this.y = this.y * (-1);
    }
    else if (this.y > height/4) {
      this.y = this.y * (-1);
    }
  }

  hurtBuster(buster){
    let d = dist(this.x, this.y, buster.x, buster.y);
    if ( d < this.radius + buster.radius) {
      buster.health -= this.dmg;
    }

  }

  display(){
    push();
    noStroke();
    this.radius = this.health;
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.radius, this.radius);
    pop();
  }



}
