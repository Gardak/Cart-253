  // Trap
  //
  //// Prey
  //
  // A class that represents a simple prey that moves
  // on screen based on a noise() function. It can move around
  // the screen and be consumed by Predator objects.

  class Trap {

    // constructor
    //
    // Sets the initial values for the Predator's properties
    // Either sets default values or uses the arguments provided
    constructor( x, y, direction) {
      // Position
      this.x = x;
      this.y = y;
      // speed
      this.speed = 5;
      // Display properties
      this.radius = 10;
      this.img = loadImage('assets/images/trap.png')
    }

    getTrap(buster){
      if (buster.ghostCaught >= 20){
        buster.numTrap += 1;
        buster.ghostCaught -= 20;
      }
    }

    handleImpact(boss){
      let d = dist(this.x, this.y, boss.x, boss.y);
      if (d < boss.radius){
        boss.death();
      }
    }

    // display
    //
    // Draw the prey as an ellipse on the canvas
    // with a radius the same size as its current health.
    display() {
      noStroke();
      image(img, this.x, this.y, this.radius);
  }
}
