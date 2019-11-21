

class IceShard extends Ball{

  constructor(){
    super();
    this.color = color(6, 61, 191)
    this.freeze = 0;
    this.freezeTime = 60;
    }

impact(enemy){
  // dmgEnemy(enemy);
  this.vx = 0;
  this.vy = 0;

  if (this.freeze < this.freezeTime){

    this.radius += this.chargeSpeed;
    this.freeze++;

  } else {
    this.radius = 0;
    this.impacted = false;
  }
}

}
