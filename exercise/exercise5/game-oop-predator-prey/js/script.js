// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let mindflayer;

// The three prey
let guard;
let peasant;
let knight;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  mindflayer = new Predator(200, 200, 9, 15, color(200, 200, 0), 30, 87, 83, 65, 68, 32);
  chtulu = new Predator(100, 100, 4, 9, color(30,200,30), 80, 38, 40, 37, 39, 16);
  guard = new Prey(100, 100, 10, color(255, 100, 10), 50);
  peasant = new Prey(100, 100, 8, color(255, 255, 255), 60);
  knight = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, moveguardt, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the mindflayer
  chtulu.handleInput();
  mindflayer.handleInput();

  // Move all the "animals"
  chtulu.move();
  mindflayer.move();
  guard.move();
  peasant.move();
  knight.move();

  // Handle the mindflayer eating any of the prey
  chtulu.handleEating(guard);
  chtulu.handleEating(peasant);
  chtulu.handleEating(knight);
  mindflayer.handleEating(guard);
  mindflayer.handleEating(peasant);
  mindflayer.handleEating(knight);

  // Display all the "animals"
  chtulu.display();
  mindflayer.display();
  guard.display();
  peasant.display();
  knight.display();
}
