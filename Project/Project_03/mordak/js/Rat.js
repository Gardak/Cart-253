
class Rat {

  constructor( x, y){

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;
    this.tx = random(0,100);
    this.ty = random(0,100);
    this.speed = 8;
    this.frozenspeed = 2;

    this.dmg = 2;

    this.maxHealth = 10;
    this.health = this.maxHealth;
    this.healthBar = 0;
    this.healthFill = 0;
    this.frozen = 0;

    this.size = 50 ;
    this.img = loadImage('assets/images/rat.png');

  }

  move() {
      this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
      this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

      this.x += this.vx;
      this.y += this.vy;

      this.tx += 0.01;
      this.ty += 0.01;

      this.handleWrapping();
    }

    handleWrapping() {

        if (this.x < 0) {
          this.x += width;
        }
        else if (this.x > width) {
          this.x -= width;
        }

        if (this.y < 0) {
          this.y = this.y * (-1);
        }
        else if (this.y > height) {
          this.y = this.y * (-1);
        }
      }

freezeEnemy(){
  if (this.frozen > 0){
    this.frozen -= 1;
  }
}

  hurtPlayer(player){
    let d = dist(this.x, this.y, player.x, player.y);
    if ( d < this.size + player.size) {
      player.health -= this.dmg;
    }
  }

  kill(player){
    this.x = random(0,width);
    this.y = random(0,height);
    player.enemyKilled ++;
    this.health = this.maxHealth
  }

display(){
  if (this.frozen > 0){
    push();
    filter(INVERT);
    rectMode(CENTER);

    image(this.img, this.x, this.y, this.size, this.size);
    pop();
} else{
  rectMode(CENTER);
  image(this.img, this.x, this.y, this.size, this.size);

}
  }

}
