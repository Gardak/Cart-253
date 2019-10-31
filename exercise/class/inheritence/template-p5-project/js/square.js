class Square extends Shape {
  constructor(x,y,size,fillColor) {
    super(x,y,size);
    this.fillColor = color(random(255),random(255),random(255));
  }

  update() {
  super.update();
  this.size += random(-5,5);
  }

  display() {
    push();
    rectMode(CENTER);
    fill(this.fillColor);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }
}
