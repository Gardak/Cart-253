// Predator-Ghost Simulation
// by Pippin Barr
//
// Creates a predator and three Ghost (of different sizes and speeds)
// The predator chases the Ghost using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let player;

// The three Ghost
let boo;


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three Ghost
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Buster( width /2, height * 4/5);
  boo = new Ghost(100, 100, 0, 50);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  if(player.healt < 0){
  // Handle input for the player
  player.handleInput();
  player.fireProton(boo);

  // Move all the "animals"
  player.move();
  boo.move();

  boo.hurtBuster(player);

  // Display all the "animals"
  player.display();
  boo.display();
}
}
