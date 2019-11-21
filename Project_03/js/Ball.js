

class Ball {


  constructor(){
    // Position
    this.x = 0;
    this.y = 0;

    // Velocity and speed
    this.vx = 0;
    this.vy = 0 ;
    this.speed = 5;
    this.dmg = 5;
    this.angle = 0;
    this.enemyDist = 0;
    this.launched = false;
    this.impacted = false;

    this.dmg = 1;

    // Display properties
    this.maxRadius = 60;
    this.radius = 0;
    this.spawnColor = color(147, 13, 181);
    this.chargeSpeed = 1;
  }

  spawn(player){
    this.spawnDisplay();
    this.x = player.x;
    this.y = player.y - 75;
    this.radius += this.chargeSpeed;
    this.radius = constrain(this.radius, 0, this.maxRadius);
    this.launched = false;
    this.impacted = false;
  }

  move(){
    this.display();


    if (this.enemyDist < 60){
      this.x += this.vx;
      this.y += this.vy;
      this.enemyDist++;
      console.log(this.vx)
    } else {
      this.vx = 0;
      this.vy = 0;
      this.radius = 0;
      this.enemyDist = 0;
      this.launched = false;
      this.impacted = true;
    }
  }

  launch(){
    this.vx = -(this.x-mouseX)/60;
    this.vy = -(this.y-mouseY)/60;
    this.launched = true;
  }

  dmgEnemy(enemy){
  if (dist(this.x,this.y,enemy.x,enemy.y) <= this.radius + enemy.size){
    enemy.health -= this.dmg
    if(enemy.health <= 0){
      enemy.kill();
    }
  }
  }

  spawnDisplay(){
    push();
    noStroke();
    fill(this.spawnColor);
    ellipse( this.x, this.y, this.radius, this.radius);
    pop();
  }

  display(){
    push();
    noStroke();
    fill(this.color);
    ellipse( this.x, this.y, this.radius, this.radius);
    pop();
  }
}
