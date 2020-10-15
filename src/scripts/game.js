import MovingObject from './moving_object';
import Numbers from './numbers';
import Equation from './equation';
const Util = require('./util');

const NumColumns = 10;
const DIM_X = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];
const WIDTH = 800;
const HEIGHT = 600;
const DIM_Y = 600;

export default class Game {
  constructor(canvas) {
    const context = canvas.getContext("2d");
    const offsetX = canvas.offsetLeft;
    const offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = {};

    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);

    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
    this.fallingNumbers = this.fallingNumber(context, this.fallingNumbers);

    const equation = new Equation();
    const newEq = equation.createEquation();
    this.drawEquation(context, newEq);
    this.rightAnswer = equation.rightAnswer(newEq);

    this.animate(context, newEq, this.bottomline, this.fallingNumbers);

    canvas.addEventListener("mousedown", (e) =>
      this.registerClick(e, offsetX, offsetY, context)
    );
  }

  registerClick(e, offsetX, offsetY, context) {
    // console.log(`offsetX: ${offsetX} offsetY: ${offsetY}`);
    debugger;
    const clickedPos = {
      x: e.clientX - offsetX,
      y: e.clientY,
      // y: Math.abs(e.clientY - offsetY) - 25,
    };
    debugger;
    alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
    let numbers = Object.values(this.fallingNumbers);
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      const left = num.pos[0];
      const right = num.pos[0] + 80;
      const top = num.pos[1];
      const bottom = num.pos[1] + 80;
      if (
        clickedPos.x >= left &&
        clickedPos.x <= right &&
        // clickedPos.y >= top &&
        clickedPos.y <= bottom
      ) {
        debugger;
        console.log(this.userClicks);
        this.userClicks[num.pos] = num;
        alert(num.text);
        console.log(this.userClicks);
        break;
      }
    }
  }

  drawEquation(context, equation) {
    context.strokeStyle = "black";
    context.font = "20px Verdana";
    context.strokeText(equation, 400, 15);
  }

  InitialLayer(context, NumColumns, bottomline) {
    let num;
    let posAtX = 0;
    for (let i = 0; i < NumColumns; i++) {
      num = Math.round(Math.random() * 10) % 10;
      const newNumber = new Numbers([posAtX, 474], num);
      newNumber.drawSquare(context);
      bottomline[posAtX] = newNumber;
      posAtX += 80;
    }
    return bottomline;
  }

  drawNumbers(context, bottomline, fallingNumbers) {
    Object.keys(bottomline).forEach((pos) => {
      const sq = bottomline[pos];
      sq.drawSquare(context);
    });
    Object.values(fallingNumbers).forEach((num) => {
      for (let i = 0; i < num.length; i++) {
        num[i].drawSquare(context);
      }
    });
  }

  randomPositionforFallingNumbers() {
    const x = DIM_X[Math.round(Math.random() * 10) % 10];
    console.log(this.fallingNumbers);
    const y = 25;
    return [x, y];
  }

  fallingNumber(context, fallingNumbers) {
    const pos = this.randomPositionforFallingNumbers();
    const num = Math.round(Math.random() * 10) % 10;
    const fallingNum = new Numbers(pos, num);
    fallingNum.drawSquare(context);
    fallingNumbers[pos[0]] = fallingNumbers[pos[0]] || [];
    fallingNumbers[pos[0]].push(fallingNum);
    if (fallingNumbers[pos[0]].length === 6) {
        alert(`Game Over`);
    } 
    return fallingNumbers;
  }

  animate(context, equation, bottomline, fallingNumbers) {
    this.frameH += 1;
    if (this.frameH > 50) {
      this.fallingNumber(context, fallingNumbers);
      this.frameH = 0;
    }
    // clear the canvas
    context.clearRect(0, 0, WIDTH, HEIGHT);
    console.log("Begin animate");
    this.drawEquation(context, equation);
    // update the pos
    this.moveObjects();
    // redraw canvas
    this.drawNumbers(context, bottomline, fallingNumbers);

    const callback = () =>
      this.animate(context, equation, bottomline, fallingNumbers);

    requestAnimationFrame(callback);
  }

  detectCollision(pos, currentFallingPosition) {
    debugger;
    const currentColumn = this.fallingNumbers[pos[0]];
    let otherNumber;
    console.log(this.fallingNumbers);
    debugger; 
    // refactor and this will be perfect
    // const height = (currentColumn.length - 1) * 81
    // return pos[1] >= (393 - height)
    // for (let i = 0; i < currentColumn.length; i++) {
      debugger;
      if (currentFallingPosition != 0) {
    //   if (i < currentFallingPosition) {
        const num = currentColumn[currentFallingPosition]
        debugger;
        otherNumber = currentColumn[currentFallingPosition - 1];
        return num.checkCollisionWith(otherNumber);
      }
    // }
  }

  moveObjects() {
    let numbers = Object.values(this.fallingNumbers);
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[i].length; j++) {
        debugger;
        if (!this.detectCollision(numbers[i][j].pos, j)) {
          debugger;
          numbers[i][j].move();
        }
      }
    }
  }

  clickedNumber() {}

  stopFallingNumber() {}
  start() {}
  gameOver() {}
}