
class Rat extends Enemy {

  constructor( x, y){
    super();
// Placement
    this.x = x;
    this.y = y;

// Interaction propreties
    this.dmg = 2;
    this.maxHealth = 10;
    this.health = this.maxHealth;

// Display propreties
    this.size = 50 ;
    this.img = loadImage('assets/images/rat.png');
    this.imgDead = loadImage('assets/images/dead_rat.png');

  }


// move in a random pattern
  move() {
      this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
      this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

      this.x += this.vx;
      this.y += this.vy;

      this.tx += 0.01;
      this.ty += 0.01;

      this.handleWrapping();
    }


// Wrap around the screen
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
}
