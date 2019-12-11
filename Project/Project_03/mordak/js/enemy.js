class Enemy{

constructor(){
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



}
