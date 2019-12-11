

class IceShard extends Ball{

  constructor(){
    super();
    this.effectRadius = 500;
    this.color = color(6, 61, 191)
    this.effect = 0;
    this.effectTime = 30;
    this.dmg = 1;

    }

    impact(enemies,player){
          this.display();
          this.vx = 0;
          this.vy = 0;

          if (this.effect < this.effectTime){
            this.radius = this.effectRadius;
            push();
            noStroke();
            fill(this.color)
            ellipse( this.x, this.y , this.radius, this.radius);
            enemies.forEach(enemy => enemy.frozen = 60);
            enemies.forEach(enemy => enemy.freezeEnemy = 60);


            this.effect++
            pop();


          } else {
            this.radius = 0;
            this.impacted = false;
            this.effect = 0;
            this.storm = 500;
          }
        }

display(){
  push();
  noStroke();
  fill(this.color);
  rectMode(CENTER);
  triangle(this.x + 25, this.y + 25, this.x - 25, this.y + 25, this.x, this.y - 25);
  pop();
}
}
