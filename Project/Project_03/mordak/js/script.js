// Ghostbuster-Ghost Simulation
// by Alex Lorrain
//
// Creates a Ghostbuster and ghosts chasing each other
// Once the first wave of ghost is cleared

// Our Hero
let player;


let gameState = "INTRO";

let ratNum = 2;
let ratPack = [];

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three Ghost
function setup() {

  createCanvas(windowWidth, windowHeight);
  fireBall = new FireBall();
  iceShard = new IceShard();
  thunderStrike = new ThunderStrike();
  player = new Wizard( width /2, height * 4/5);


  for (i = 0; i < ratNum; i++){

    let x = random( 100, width - 100);
    let y = random( 100,height - 100);

        let rat = new Rat(x, y);
        ratPack.push(rat);
  }
}


  function draw() {

  background(100);

    if (gameState === "INTRO") {

      showIntro();
      if (keyIsDown(32)){
        gameState = "GAME" ;
      }

    } else if (gameState === "GAME") {
        player.handleMovement();
        player.move();
        player.display();
        player.selectBallType();
        player.launchBall(player.ballType,ratPack);

        for (let i = 0; i < ratNum; i++){
        ratPack[i].move();
        ratPack[i].hurtPlayer(player);
        ratPack[i].display();
      }

    }

  }




  function showIntro() {
      textAlign(CENTER, CENTER);

      let introTitle = "Mordak's Revenge\n";

      let introText = "Survive as long as you can\n";
      introText = introText + "--Press space to start--";

      let instruction = "WASD to move around\n";
      instruction = instruction + "Left click to launch a fire ball\n";
      instruction = instruction + "1, 2, 3 to choose spell\n";

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

    }
