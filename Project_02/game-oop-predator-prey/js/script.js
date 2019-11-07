// Ghostbuster-Ghost Simulation
// by Alex Lorrain
//
// Creates a Ghostbuster and ghosts chasing each other
// Once the first wave of ghost is cleared, a boss appears
// The Ghostbuster has to charge his trap and capture the boss

// Our predator
let player;

// The number of ghost in the first wave
let numGhost = 4;
let ghosts = [];

let gameState = "INTRO";


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three Ghost
function setup() {

  createCanvas(windowWidth, windowHeight);
  player = new Buster( width /2, height * 4/5);

  logo = loadImage('assets/images/logo.png');
  slime = loadImage('assets/images/slime.png');
  ooze = loadImage('assets/images/ooze.png');

  for (let i = 0; i < numGhost; i++){
    let speed = random(4,7);
    let radius = random(50,100);
    let boo = new Ghost(speed, radius);

    ghosts.push(boo);
  }
  for (let i = 0; i < numGhost; i++){
    let speed = random(4,7);
    let radius = random(50,100);
    let vx = random(12,15);
    let vy = random(12,15);
    let boo = new FastGhost(speed, radius, vx, vy);

    ghosts.push(boo);
  }

}

function draw() {

  background(0);

    if (gameState === "INTRO") {

      showIntro();

      if (keyIsDown(32)){
        gameState = "GAME" ;
      }

    } else if (gameState === "GAME") {
      if (player.health > 0) {
      // Handle input for the player
      player.handleInput();

      // Move all
      player.move();


      // Display all
      player.display();

      for (let i = 0; i < numGhost; i++){
        if (ghosts[i].health > 5){
        ghosts[i].move();
        ghosts[i].hurtBuster(player);
        ghosts[i].display();
        player.fireProton(ghosts[i]);
      }
      }

      } else if (player.health <= 0){

      showGameOver();


    }

  } else if (gameState === "BOSS"){
    if (bossState < 0) {

      boss.spawn();
      bossState ++;

    } else if (bossState > 240) {

    }
  }

  }

  function showIntro() {
      textAlign(CENTER, CENTER);

      let introTitle = "Ghosts and Busters\n";

      let introText = "Capture the ghosts to wake the Boss\n";
      introText = introText + "--Press space to start--";

      let instruction = "WASD to move around\n";
      instruction = instruction + "Left click to fire the proton pack\n";
      instruction = instruction + "Space to sprint";

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


  function showGameOver() {
      textAlign(CENTER, CENTER);

      let gameOverTitle = "YOU GOT SLIMED\n";

      let gameOverText = "Even if you captured " + player.ghostCaught + " ghosts\n";
      gameOverText = gameOverText + "You flee the scene in TERROR";

      let instruction = "--Refresh the page to restart--";

      imageMode(CORNER);
      image(ooze, 0, 0, width);

      push();
      textSize(100);
      strokeWeight(10);
      stroke(47, 201, 0);
      fill(200);
      text(gameOverTitle, width / 2, height / 3);
      pop();

      push();
      textSize(36);
      strokeWeight(3);
      stroke(200);
      fill(47, 201, 0);
      text(gameOverText, width / 2, height / 2);
      pop();

      push();
      textSize(30);
      noStroke();
      fill(47, 201, 0);
      text(instruction, width /2, height * 4/5);
      pop();

      imageMode(CENTER)
      image(logo, width /5, height * 4/5, 300, 300);
      tint(255, 166);
      image(slime, width /5, height * 4/5, 300, 300);

    }
