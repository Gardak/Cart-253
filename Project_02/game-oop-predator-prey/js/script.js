// Ghostbuster-Ghost Simulation
// by Alex Lorrain
//
// Creates a Ghostbuster and ghosts chasing each other
// Once the first wave of ghost is cleared, a boss appears
// The Ghostbuster has to charge his trap and capture the boss

// Our predator
let player;

// The three Ghost
let boo;

let gameState = "INTRO";


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three Ghost
function setup() {

  createCanvas(windowWidth, windowHeight);
  player = new Buster( width /2, height * 4/5);
  boo = new Ghost(100, 100, 0, 50);

  logo = loadImage('assets/images/logo.png');

}

function draw() {

  background(0);

    if (gameState === "INTRO") {

      showIntro();

      if (keyIsDown(32)){
        gameState = "GAME" ;
      }

    } else if (gameState === "GAME" && player.health > 0) {

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
    } else if (gameState === "GAMEOVER") {

      showGameOver();

      if (keyIsDown(32)){
        gameState = "INTRO" ;
      }


    } else {

    }

    // showGameOver()
    //
    // Display text about the game being over!
    function showIntro() {
      textAlign(CENTER, CENTER);

      let introTitle = "Ghosts and Busters\n";

      let introText = "Capture the ghosts to wake the Boss\n";
      introText = introText + "--Press space to start--";

      let instruction = "WASD to move around\n";
      instruction = instruction + "Left click to fire the proton pack\n";
      instruction = instruction + "Space to sprint";



      // Display it in the centre of the screen
      push();
      textSize(100);
      strokeWeight(10);
      stroke(200,70,30);
      fill(250);
      text(introTitle, width / 2, height / 3);
      pop();

      push();
      textSize(36);
      strokeWeight(3);
      stroke(250);
      fill(200,70,30);
      text(introText, width / 2, height / 2);
      pop();

      push();
      textSize(30);
      noStroke();
      fill(200,70,30);
      text(instruction, width * 4/5, height * 4/5);
      pop();

      imageMode(CENTER)
      image(logo, width /5, height * 4/5, 300, 300);
    }


    // showGameOver()
    //
    // Display text about the game being over!
    function showGameOver() {
      // Set up the text to display
      let gameOverText = "GAME OVER\n"; // \n means "new line"
      gameOverText = gameOverText + "You captured " + ghostCaught + " rebels\n";
      gameOverText = gameOverText + "before you died.\nVader will not be happy"
      // Display it in the centre of the screen
      text(gameOverText, width / 2, height / 2);
    }



}
