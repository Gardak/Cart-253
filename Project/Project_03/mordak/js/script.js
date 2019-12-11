
let player;


let gameState = "INTRO";

let ratNum = 4;
let ratPack = [];
let skeletonNum = 2;
let skeletonPack = [];



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
  for (i = 0; i < skeletonNum; i++){

    let x = random( 100, width - 100);
    let y = random( 100,height - 100);

        let skeleton = new Skeleton(x, y);
        skeletonPack.push(skeleton);
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
        player.launchBall(player.ballType,enemies);

        for (let i = 0; i < ratPack.lenght; i++){
        ratPack[i].move();
        ratPack[i].hurtPlayer(player);
        ratPack[i].display();
      }

      for (let i = 0; i < skeletonPack.lenght; i++){
      skeletonPack[i].hurtPlayer(player);
      skeletonPack[i].attack(player);
      skeletonPack[i].display();
    }

  } else if (player.enemyKilled >= 6) {
    showEnding();
  } else if (player.health >= 0) {
    showGameOver();
  }

  }




  function showIntro() {
      textAlign(CENTER, CENTER);

      let title = "Mordak's Revenge\n";

      let text = "Survive as long as you can\n";
      text = text + "--Press space to start--";

      let instruction = "WASD to move around\n";
      instruction = instruction + "Left click to launch a fire ball\n";
      instruction = instruction + "1, 2, 3 to choose spell\n";

      push();
      textSize(100);
      strokeWeight(10);
      stroke(200,70,30);
      fill(250);
      text(title, width / 2, height / 3);
      pop();

      push();
      textSize(36);
      strokeWeight(3);
      stroke(250);
      fill(200,70,30);
      text(text, width / 2, height / 2);
      pop();

      push();
      textSize(30);
      noStroke();
      fill(200,70,30);
      text(instruction, width * 4/5, height * 4/5);
      pop();

    }

    function showEnding() {
        textAlign(CENTER, CENTER);

        let title = "You Survive!!\n";

        let text = "Mordak will not have his revenge today\n";
        text = text + "You must be prepared for when he comes back";

        let instruction = "Refresh the page to restart\n";

        push();
        textSize(100);
        strokeWeight(10);
        stroke(200,70,30);
        fill(250);
        text(title, width / 2, height / 3);
        pop();

        push();
        textSize(36);
        strokeWeight(3);
        stroke(250);
        fill(200,70,30);
        text(text, width / 2, height / 2);
        pop();

        push();
        textSize(30);
        noStroke();
        fill(200,70,30);
        text(instruction, width * 4/5, height * 4/5);
        pop();

      }

      function showGameOver() {
          textAlign(CENTER, CENTER);

          let title = "You Perished!!\n";

          let text = "Mordak got his revenge!!\n";
          text = text + "Who will stop Mordak in his rampage?";

          let instruction = "Refresh the page to restart\n";

          push();
          textSize(100);
          strokeWeight(10);
          stroke(200,70,30);
          fill(250);
          text(title, width / 2, height / 3);
          pop();

          push();
          textSize(36);
          strokeWeight(3);
          stroke(250);
          fill(200,70,30);
          text(text, width / 2, height / 2);
          pop();

          push();
          textSize(30);
          noStroke();
          fill(200,70,30);
          text(instruction, width * 4/5, height * 4/5);
          pop();

        }
