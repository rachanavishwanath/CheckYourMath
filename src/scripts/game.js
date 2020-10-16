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
    this.context = canvas.getContext("2d");
    const offsetX = canvas.offsetLeft;
    const offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = [];
    this.playing = false;
    this.frameId = null;

    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);
    this.removeRightAnswerSquare = this.removeRightAnswerSquare.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);

    this.bottomline = this.InitialLayer(this.context, NumColumns, this.bottomline);
    this.fallingNumbers = this.fallingNumber(this.context, this.fallingNumbers);

    const equation = new Equation();
    const newEq = equation.createEquation();
    // this.drawEquation(this.context, newEq);
    this.rightAnswer = equation.rightAnswer(newEq);

    this.animate(this.context, newEq, this.bottomline, this.fallingNumbers);

    canvas.addEventListener("mousedown", (e) =>
      this.registerClick(e, offsetX, offsetY, this.context)
    );
    document.addEventListener("keydown", (e) =>
      this.keyHandler(e, this.context, this.bottomline, this.fallingNumbers)
    );
  }

  keyHandler(e, context, bottomline, fallingNumbers) {
    debugger;
    e.preventDefault();
    if (e.key == "Enter") {
      this.playing = true;
      this.restartGame(context, bottomline, fallingNumbers);
    }
  }

  restartGame(context, bottomline, fallingNumbers) {
    document.getElementById("startGame").classList.add("hidden");
    const equation = new Equation();
    const newEq = equation.createEquation();
    this.animate(context, newEq, bottomline, fallingNumbers);
  }

    gameOver(){
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        debugger
        this.playing = false;
        console.log(this.context);
        this.context.clearRect(0, 0, WIDTH, HEIGHT);
        document.getElementById("endGame").classList.add("visible");
    }

    updateCanvas(){

    }

    removeRightAnswerSquare(currentCol) {
        console.log(this.userClicks);
        console.log(this.bottomline);
        this.userClicks.forEach((num) => {
        if (this.rightAnswer < 10) {
            if (num.text === this.rightAnswer && num.pos[1] === 474) {
            delete this.bottomline[num.pos[0]];
            this.userClicks = [];
            console.log(this.bottomline);
            console.log(`right answer`);
            } else if (num.text === this.rightAnswer) {
            }
        }
        });
        console.log(this.rightAnswer);
    }

  registerClick(e, offsetX, offsetY) {
    const clickedPos = {
      x: e.clientX - offsetX,
      y: Math.abs(e.clientY - offsetY) - 25,
    };
    alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
    const currentCol = this.currentColumnForUserClick(clickedPos.x);
    let fNumbers;
    let allNumbers;
    let bNumbers = [this.bottomline[currentCol]];
    if (this.fallingNumbers.hasOwnProperty(currentCol)) {
      fNumbers = this.fallingNumbers[currentCol];
      allNumbers = fNumbers.concat(bNumbers);
    } else {
      allNumbers = bNumbers;
    }
    debugger;
    console.log(allNumbers);
    for (let i = 0; i < allNumbers.length; i++) {
      let num = allNumbers[i];
      const left = num.pos[0];
      const right = num.pos[0] + 80;
      const top = num.pos[1];
      const bottom = num.pos[1] + 80;
      if (
        clickedPos.x >= left &&
        clickedPos.x <= right &&
        clickedPos.y >= top &&
        clickedPos.y <= bottom
      ) {
        console.log(this.userClicks);
        this.userClicks.push(num);
        alert(num.text);
        console.log(this.userClicks);
        break;
      }
    }
    this.removeRightAnswerSquare(currentCol);
  }

  currentColumnForUserClick(xOfClicked) {
    let i = 0;
    let x = 0;
    while (i < 10) {
      if (xOfClicked > x && xOfClicked < x + 80) {
        return x;
      }
      x += 80;
      i += 1;
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
        debugger
      this.gameOver();
    }
    return fallingNumbers;
  }

  animate(context, equation, bottomline, fallingNumbers) {
    if (this.playing === true) {
      this.frameH += 1;
      if (this.frameH > 50) {
        this.fallingNumber(context, fallingNumbers);
        this.frameH = 0;
      }
      context.clearRect(0, 0, WIDTH, HEIGHT);
      this.drawEquation(context, equation);
      this.moveObjects();
      this.drawNumbers(context, bottomline, fallingNumbers);

      const callback = () =>
        this.animate(context, equation, bottomline, fallingNumbers);

      this.frameId = requestAnimationFrame(callback);
    }
  }

  detectCollision(pos, currentFallingPosition) {
    const currentColumn = this.fallingNumbers[pos[0]];
    let otherNumber;
    if (currentFallingPosition != 0) {
      const num = currentColumn[currentFallingPosition];
      otherNumber = currentColumn[currentFallingPosition - 1];
      return num.checkCollisionWith(otherNumber);
    }
  }

  moveObjects() {
    let numbers = Object.values(this.fallingNumbers);
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[i].length; j++) {
        if (!this.detectCollision(numbers[i][j].pos, j)) {
          const foundBottomLine = this.bottomline.hasOwnProperty([
            numbers[i][j].pos[0],
          ]);
          numbers[i][j].move(foundBottomLine);
        }
      }
    }
  }

}