# CheckYourMath

[Live Link](https://rachanavishwanath.github.io/CheckYourMath/)

## Overview

This is a single player game.
  * Main screen displays a math operation
  * Player can choose answer from the numbers on the screen

## Functionality
 
 ![](Game.gif)
 
 Pause and play feature:
 
 ![](Pause_Play.gif)
 
 Selected incorrect number? No problem, click again to unselect it!
 
 ![](Select_Unselect.gif)
 
 Random generation of equations:
```
 const length = Math.round((Math.random() * 10) % 1) + 1;
        const startNum1 = Math.round((Math.random() * 10) % 4) + 1;
        const startNum2 = Math.round((Math.random() * 10) % 4) + 1;
        const mathOp = MATHOP[Math.round((Math.random() * 10) % 2)];
        let num1 = this.shuffled(NUMBERS).slice(
            startNum1,
            startNum1 + length
        );
        let num2 = this.shuffled(NUMBERS).slice(
            startNum2,
            startNum2 + length
        );
        if (parseInt(num1) < parseInt(num2) && mathOp === '-') {
            const temp = num1;
            num1 = num2;
            num2 = temp;
        }
        const equation = `What is ${num1} ${mathOp} ${num2}?`;
```
## MVPs
  * Make the falling numbers and display on screen
  * Genarate equations
  * Make the falling numbers clickable, register the clicked number, right answer should delete the number
  * Bonus:
    * Add medium and hard levels for Math equation
    * Integrate Web music API to add game sounds

## Classes
  * Util
    * Utility code for the velocity of fall of numbers
  * MovingObjects
    * Base class for moving objects
  * Numbers
    * Inherits from movingObjects
  * Equation
    * generates random math equations
  * Game
    * Holds core game functionality
  * GameView
    * stores a game instance, 
    * stores a canvas to draw into 

## Wireframes

![WireFrame](CheckYourMathWireFrame.jpg)

## Architecture and Technology
CSS, Javascript, HTML, three.js, Web Audio API for game music 

## Implementation Timeline

### Phase 1
  Implement falling numbers on screen
   * create util class
      * const util - generates velocity of fall
      * util.inherits - inheritance
   * create movingobjects class
      * constructor with necessary arguments
      * MovingObject.prototype.move 
      * MovingObject.prototype.draw  (might differ for three.js)
   * create numbers class inheriting form movingobjects
      * function Number
      * Inherits from movingObject
   * create Game class
      * 
### Phase 2
  Generate equations
   * create Equation class
### Phase 3
 * Make numbers clickable
 * delete the number corresponding to the right answer
   * Game.prototype.rightanswer
 * Define logic for game-end
  * Implement game music if time permits
