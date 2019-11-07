

class FastGhost extends Ghost {

constructor(speed, radius, vx, vy){
  super(speed, radius);
  this.vx = vx;
  this.vy = vy;
}

move(){
  
  this.x += this.vx;
  this.y += this.vy;

}

handleWrapping(){
  if (this.x < 0) {
    this.x = this.x * (-1);
  }
  else if (this.x > width) {
    this.x = this.x * (-1);
  }
  // Bounce off the top or bottom
  if (this.y < 0) {
    this.y = this.y * (-1);
  }
  else if (this.y > height) {
    this.y = this.y * (-1);
  }
}


}
