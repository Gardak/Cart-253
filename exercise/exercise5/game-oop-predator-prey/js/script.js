// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let mindflayer;
let beholder;

// The three prey
let guard;
let peasant;
let knight;

// Images for the carachters
let mindflayerImg;
let beholderImg;
let guardImg;
let peasantImg;
let knightImg;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  mindflayerImg = loadImage("assets/images/mindflayer.png")
  beholderImg = loadImage("assets/images/beholder.png")
  guardImg = loadImage("assets/images/guard.png")
  peasantImg = loadImage("assets/images/peasant.png")
  knightImg = loadImage("assets/images/knight.png")

  createCanvas(windowWidth, windowHeight);
  mindflayer = new Predator(mindflayerImg, 200, 200, 9, 15, color(200, 200, 0), 60, 87, 83, 65, 68, 32);
  beholder = new Predator(beholderImg, 100, 100, 4, 9, color(30,200,30), 100, 38, 40, 37, 39, 16);
  guard = new Prey(guardImg, 100, 100, 10, color(255, 100, 10), 50);
  peasant = new Prey(peasantImg, 100, 100, 8, color(255, 255, 255), 60);
  knight = new Prey(knightImg, 100, 100, 20, color(255, 255, 0), 30);
}

// draw()
//
// Handles input, moveguardt, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the mindflayer
  beholder.handleInput();
  mindflayer.handleInput();

  // Move all the "animals"
  beholder.move();
  mindflayer.move();
  guard.move();
  peasant.move();
  knight.move();

  // Handle the mindflayer eating any of the prey
  beholder.handleEating(guard);
  beholder.handleEating(peasant);
  beholder.handleEating(knight);
  mindflayer.handleEating(guard);
  mindflayer.handleEating(peasant);
  mindflayer.handleEating(knight);

  // Display all the "animals"
  beholder.display();
  mindflayer.display();
  guard.display();
  peasant.display();
  knight.display();
}
