

class Ball {


  constructor( x, y, targetX, targetY){
    // Position
    this.x = x;
    this.y = y;

    // Velocity and speed
    this.vx = 0;
    this.vy = 0 ;
    this.speed = 5;
    this.dmg = 5;
    this.angle = 0;
    this.dist = 0;
    this.launched = false;

    // Display properties
    this.maxRadius = 50;
    this.radius = 0;
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


    if (this.dist < 60){
      this.x += this.vx;
      this.y += this.vy;
      this.dist++;
      console.log(this.vx)
    } else {
      this.vx = 0;
      this.vy = 0;
      this.radius = 0;
      this.dist = 0;
      this.launched = false;
    }
  }

  impact(){
    this.radius += 0.5
    this.launched = false;
  }

  launch(){
    this.vx = -(this.x-mouseX)/60;
    this.vy = -(this.y-mouseY)/60;
    this.launched = true;
  }

  display(){
    push();
    noStroke();
    fill(this.color);
    ellipse( this.x, this.y, this.radius, this.radius);
    pop();
  }



}
