
class Skeleton extends Enemy {

  constructor( x, y){
    super();
// Placement
    this.x = x;
    this.y = y;

// Interaction propreties
    this.dmg = 2;
    this.maxHealth = 40;
    this.health = this.maxHealth;
    this.atkTimer = 0;
    this.DarkOrb = new DarkOrb();

// Display propreties
    this.size = 50 ;
    this.imgAtk = loadImage('assets/images/skeleton_atk.png');
    this.imgDead = loadImage('assets/images/skeleton_dead.png');
    this.imgAlive =loadImage('assets/images/skeleton.png');
    this.img = this.imgAlive;

  }

attack(player){
  this.atkTimer++;
  if (this.atkTimer >= 200){
    ball.spawn(this);
    ball.effect = 0;
    this.img = this.imgAtk;
    } else if (ball.radius === ball.maxRadius && ball.launched === false && ball.impacted === false) {
    ball.launchEnemy(player);
    } else if (ball.launched === true && ball.impacted === false) {
    ball.move();
    } else if (ball.launched === false && ball.impacted === true) {
    ball.impact(enemies,player);
    this.img = this.imgAlive;
    }
    }
  }
}
