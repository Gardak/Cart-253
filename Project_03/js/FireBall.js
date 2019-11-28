
class FireBall extends Ball{

  constructor(){
    super();
    this.effectRadius = 500;
    this.effect = 0;
    this.effectTime = 120;
    this.color = color(176,21,7);
    this.dmg = 10;

    }

impact(enemies,player){
  this.display();
  this.vx = 0;
  this.vy = 0;

  if (this.effect < this.effectTime){

    enemies.forEach(enemy => this.dmgEnemy(enemy,player));
    this.radius += this.chargeSpeed;
    this.radius = constrain(this.radius, 0, this.effectRadius);
    this.effect++;

  } else {
    this.radius = 0;
    this.impacted = false;
    this.effect = 0;
  }
}

display(){
  push();
  noStroke();
  fill(this.color);
  ellipse( this.x, this.y, this.radius, this.radius);
  pop();
}
}
