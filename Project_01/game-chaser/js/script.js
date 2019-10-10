"use strict";

/******************************************************

Game - Chaser
Pippin Barr

A "simple" game of cat and mouse. The player is a circle and can move with keys,
if they overlap the (randomly moving) prey they "eat it" by sucking out its life
and adding it to their own. The player "dies" slowly over time so they have to keep
eating to stay alive.

Includes: Physics-based movement, keyboard controls, health/stamina,
random movement, screen wrap.

******************************************************/

// Track whether the game is over
let gameState = "INTRO";

// Player position, size, velocity
let playerX;
let playerY;
let playerRadius = 50;
let playerVX = 0;
let playerVY = 0;
let playerMaxSpeed = 4;
let playerSprint = 8;
let sprintDmg = 2;
// Player health
let playerHealth;
let playerMaxHealth = 255;
// Player fill color
let playerFill = 50;
let player;
let healthBar = 0;
let healthFill = 0;

// Prey position, size, velocity
let preyX;
let preyY;
let preyRadius = 40;
let preyVX;
let preyVY;
let preyMaxSpeed = 6;
// Prey health
let preyHealth;
let preyMaxHealth = 100;
// Prey fill color
let preyFill = 200;
let prey;

// Amount of health obtained per frame of "eating" (overlapping) the prey
let eatHealth = 10;
// Number of prey eaten during the game (the "score")
let preyEaten = 0;

let music;

// Values for the prey movement
let nX = 0;
let nY = 0;

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(500, 500);

  noStroke();

  // We're using simple functions to separate code out
  setupPrey();
  setupPlayer();

  // Setup the music
  music = loadSound("assets/sounds/epic.mp3")

  imageMode(CENTER)
  prey = loadImage('assets/images/x-wing.png')
  player = loadImage('assets/images/star-destroyer.png')
  background = loadImage('assets/images/death-star.jpg')
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width / 5;
  preyY = height / 2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4 * width / 5;
  playerY = height / 2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  // Setup background
  image(background, width / 2, height / 2)
  handleInput();
  if (gameState === "INTRO") {
    // Set up the font
    textSize(38);
    textAlign(CENTER, CENTER);
    strokeWeight(3);
    stroke(0);
    fill(200,70,30);
    // Introduce the game
    text('Capture the fleeting rebels!\n\nClick the mouse to start', width / 2, height / 2)

  } else if (gameState === "GAME") {


    movePlayer();
    movePrey();

    checkEating();
    updateHealth();


    drawPrey();
    drawPlayer();
  } else if (gameState === "GAMEOVER") {
    showGameOver();
    setupPrey();
    setupPlayer();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  } else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  } else {
    playerVY = 0;
  }
  if (keyIsDown(16)) {
    playerMaxSpeed = playerSprint;
    playerMaxHealth -= sprintDmg;
  } else {
    playerMaxSpeed = 4;
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX = playerX + playerVX;
  playerY = playerY + playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    // Off the left side, so add the width to reset to the right
    playerX = playerX + width;
  } else if (playerX > width) {
    // Off the right side, so subtract the width to reset to the left
    playerX = playerX - width;
  }

  if (playerY < 0) {
    // Off the top, so add the height to reset to the bottom
    playerY = playerY + height;
  } else if (playerY > height) {
    // Off the bottom, so subtract the height to reset to the top
    playerY = playerY - height;
  }
}

// updateHealth()
//
// Reduce the player's health (happens every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health
  playerHealth = playerHealth - 0.5;
  // Constrain the result to a sensible range
  playerHealth = constrain(playerHealth, 0, playerMaxHealth);
  // Check if the player is dead (0 health)
  if (playerHealth === 0) {
    // If so, the game is over
    gameState = "GAMEOVER";
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  let d = dist(playerX, playerY, preyX, preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = playerHealth + eatHealth;
    // Constrain to the possible range
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
    // Reduce the prey health
    preyHealth = preyHealth - eatHealth;
    // Constrain to the possible range
    preyHealth = constrain(preyHealth, 0, preyMaxHealth);
  }
  // Check if the prey died (health 0)
  if (preyHealth === 0) {
    // Move the "new" prey to a random position
    preyX = random(0, width);
    preyY = random(0, height);
    // Give it full health
    preyHealth = preyMaxHealth;
    // Track how many prey were eaten
    preyEaten = preyEaten + 1;

    // Increse the difficulty
    // Player size increase and speed decrease
    playerRadius += 2;
    playerMaxSpeed = playerMaxSpeed * 0.95;
    // Increase the prey health
    preyMaxHealth += 10;
  }
}

// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {

  // Update prey position based on velocity
  preyVX = map(noise(nX), 0, 1, -preyMaxSpeed, preyMaxSpeed);
  preyVY = map(noise(nY), 0, 1, -preyMaxSpeed, preyMaxSpeed);
  //Update prey velocity
  preyX += preyVX;
  preyY += preyVY;

  nX += 0.035;
  nY += 0.015;

  // Screen wrapping
  if (preyX < 0) {
    preyX = preyX + width;
  } else if (preyX > width) {
    preyX = preyX - width;
  }

  if (preyY < 0) {
    preyY = preyY + height;
  } else if (preyY > height) {
    preyY = preyY - height;
  }
}

function mousePressed() {
  if (gameState === "INTRO") {
    gameState = "GAME";
    music.loop();
  } else if (gameState === "GAME") {
    gameState = "GAMEOVER";
  } else if (gameState === "GAMEOVER") {
    gameState = "INTRO";
  }

}

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  push();
  fill(preyFill, preyHealth);
  image(prey, preyX, preyY, preyRadius, preyRadius);
  pop();
}

// drawPlayer()
//
// Draw the player and his health bar
function drawPlayer() {
  fill(playerFill, playerHealth);
  image(player, playerX, playerY, playerRadius * 2.2, playerRadius);
  healthBar = map(playerHealth, 0, 255, 0, width);
  healthFill = map(playerHealth, 0, 255, 255, 0);
  push();
  fill(healthFill, 100, 30);
  rectMode(CENTER, CENTER);
  rect(width / 2, height - 20, healthBar, 20);
  pop();
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  // Set up the text to display
  let gameOverText = "GAME OVER\n"; // \n means "new line"
  gameOverText = gameOverText + "You captured " + preyEaten + " rebels\n";
  gameOverText = gameOverText + "before you died.\nVader will not be happy"
  // Display it in the centre of the screen
  text(gameOverText, width / 2, height / 2);
}
