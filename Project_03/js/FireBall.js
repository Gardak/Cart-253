
class FireBall extends Ball{

  constructor(){
    super();
    this.burnRadius = 500;
    this.burn = 0;
    this.burnTime = 0;
    this.color = color(176,21,7);
    }

impact(enemy){
  super.display();
  // super.dmgEnemy(enemy);
  this.vx = 0;
  this.vy = 0;

  if (this.burn < this.burnTime){

    this.radius += this.chargeSpeed;
    this.radius = constrain(this.radius, 0, this.burnRadius);
    this.burn++;

  } else {
    this.radius = 0;
    this.impacted = false;
    this.burn = 0;
  }
}

}
