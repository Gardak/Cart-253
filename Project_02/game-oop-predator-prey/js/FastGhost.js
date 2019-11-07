

class FastGhost extends Ghost {

constructor(speed, radius, vx, vy){
  super(speed, radius);
  this.vx = vx;
  this.vy = vy;
}

move(){

  this.x += this.vx;
  this.y += this.vy;

  this.handleWrapping();
}

handleWrapping(){
  if (this.x < 0) {
    this.vx = this.vx * (-1);
  }
  else if (this.x > width) {
    this.vx = this.vx * (-1);
  }
  // Bounce off the top or bottom
  if (this.y < 0) {
    this.vy = this.vy * (-1);
  }
  else if (this.y > height) {
    this.vy = this.vy * (-1);
  }
}


}
