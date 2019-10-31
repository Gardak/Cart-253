class Circle extends Shape {
  constructor(x,y,size) {
    super(x,y,size);
  }

  update(){
    super.update()
    this.size += random(-5,5)
  }

  display() {
    push();
    ellipseMode(CENTER,CENTER);
    fill(random(255),random(255),random(255));
    noStroke();
    ellipse(this.x,this.y,this.size,this.size);
    pop();
  }
}
