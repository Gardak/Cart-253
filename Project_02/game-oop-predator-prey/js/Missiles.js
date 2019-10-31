  // Missiles
  //
  //// Prey
  //
  // A class that represents a simple prey that moves
  // on screen based on a noise() function. It can move around
  // the screen and be consumed by Predator objects.

  class Missiles {

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
      this.fillColor = (199, 35, 6);
      this.radius = 10;
    }

    // display
    //
    // Draw the prey as an ellipse on the canvas
    // with a radius the same size as its current health.
    display() {
      noStroke();
      fill(this.fillColor);
      ellipse(this.x, this.y, this.radius * 2);
    }

    fire() {

    }
  }
