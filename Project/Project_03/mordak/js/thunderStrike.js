

class ThunderStrike extends Ball{

  constructor(){
    super();
    this.color = color(239, 250, 25)
    this.effect = 0;
    this.effectTime = 20;
    this.dmg = 100;
    this.storm = 500;
    this.sky = this.storm;
    this.thunder = this.storm / this.effectTime;
    this.radius = 50;
    }

  impact(enemies,player){
        this.display();
        this.vx = 0;
        this.vy = 0;

        if (this.effect < this.effectTime){
          this.radius = 20;

          enemies.forEach(enemy => this.dmgEnemy(enemy,player));
          push();
          strokeWeight(6);
          stroke(255);
          line( this.x, 0, this.x, this.y - this.storm);
          strokeWeight(4);
          stroke(0);
          line( this.x, 0, this.x, this.y - this.storm);
          strokeWeight(2);
          stroke(239, 250, 25);
          line( this.x, 0, this.x, this.y - this.storm);
          pop();

          this.storm -= this.thunder;
          this.effect++


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
  quad(this.x - 20, this.y, this.x + 20, this.y, this.x, this.y - 40,this.x, this.y + 40);
  pop();
}
}
