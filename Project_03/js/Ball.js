

class Ball {


  constructor(){
    // Position
    this.x = 0;
    this.y = 0;

    // Velocity and speed
    this.vx = 0;
    this.vy = 0 ;
    this.ballSpeed = 45;
    this.dmg = 5;
    this.angle = 0;
    this.enemyDist = 0;
    this.launched = false;
    this.impacted = false;


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
    this.enemyDist = 0;
  }

  move(){
    this.display();


    if (this.enemyDist < this.ballSpeed){
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
    this.vx = -(this.x-mouseX) / this.ballSpeed;
    this.vy = -(this.y-mouseY) / this.ballSpeed;
    this.launched = true;
  }

  freezeEnemy(enemy,player){

    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if ( d < this.radius + enemy.size/2) {
      enemy.health -= this.dmg;
      enemy.isFrozen = true;
    }
  }

  dmgEnemy(enemy,player){

    let d = dist(this.x, this.y, enemy.x, enemy.y);

    if ( d < this.radius + enemy.size/2) {
      enemy.health -= this.dmg;
      if(enemy.health <= 0){
        enemy.kill(player);
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

}
