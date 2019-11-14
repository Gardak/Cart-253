function setup() {
  createCanvas(640,640);
  fill(255);
  stroke(0);
  background(255,255,255);


}

function draw() {
  background(255);
  line(-mouseY,-mouseX,random(500),100);
  line(mouseX,-mouseY,random(500),53);
  line(-mouseY,mouseX,35,random(500));
  line(mouseX,mouseY,253,random(500));

}
