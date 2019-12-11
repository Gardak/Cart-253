class Enemy{

constructor(){
    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;
    this.tx = random(0,100);
    this.ty = random(0,100);
    this.speed = 8;

    this.dmg = 2;

    this.maxHealth = 10;
    this.health = this.maxHealth;
    this.healthBar = 0;
    this.healthFill = 0;
    this.frozen = 0;

    this.size = 50 ;
}

// Damage the player by touching him
  hurtPlayer(player){
    let d = dist(this.x, this.y, player.x, player.y);
    if ( d < this.size + player.size) {
      player.health -= this.dmg;
    }
  }

// Give the player a point and put the corpse
  kill(player){
    this.speed = 0;
    this.vx = 0;
    this.vy = 0;
    this.img = this.imgDead;
    player.enemyKilled ++;
  }

// Display the enemy
display(){
  if (this.frozen > 0){
    push();
    filter(INVERT);
    rectMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
    pop();

  } else{
    push();
    rectMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
    pop();
  }
  }

  // Keep track if the enemy is frozen
  freezeEnemy(){
    if (this.frozen > 0){
      this.frozen -= 1;
    }
  }

}
