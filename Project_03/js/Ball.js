

class Ball {


  constructor( x, y, targetX, targetY){
    // Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.vx = Math.abs(x-targetX);
    this.vy = Math.abs(y-targetY);
    this.speed = 5;
    this.dmg = 5;
    this.angle = 0;

    // Display properties
    this.maxRadius = 50;
    this.radius = 50;
    this.color = color(176, 21, 7);
  }

  spawn(player){
    this.display();
    this.x = player.x;
    this.y = player.y - 75;
    this.radius += 0.5;
    this.radius = constrain(this.radius, 0, this.maxRadius);
  }

  move(){
    this.display();
    this.angle = tan((Math.abs(this.x-mouseX))/(Math.abs(this.y-mouseY)));
    this.vx = this.speed * cos(this.angle);
    this.vy = this.speed * sin(this.angle);

    this.x += this.vx;
    this.y += this.vy;
  }


  handleWrapping() {

  }

  hurtBuster(buster){

  }

  display(){
    push();
    noStroke();
    fill(this.color);
    ellipse( this.x, this.y, this.radius, this.radius);
    pop();
  }



}
