
let shapes = [];
let numShapes = 100;

function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < numShapes; i++) {
    let shapeX = random(0,width);
    let shapeY = random(0,height);
    let shapeSize = random(50,150);
    let newSquare = new Square(shapeX,shapeY,shapeSize);
    shapes.push(newSquare);
    let newCircle =new Circle(random(0,width),random(0,height),100);
    shapes.push(newCircle);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < numShapes; i++){
    shapes[i].update();
    shapes[i].display();
  }

}
