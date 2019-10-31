
let mySquare1;
let mySquare2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare1 = new Square(random(0,width),random(0,height),100);
  mySquare2 = new Square(random(0,width),random(0,height),100);
  myCircle1 = new Circle(random(0,width),random(0,height),100);

}

function draw() {
  background(255);
  mySquare1.update();
  mySquare2.update();
  myCircle1.update();
  mySquare1.display();
  mySquare2.display();
  myCircle1.display();

}
