import MovingObject from './moving_object';
import Numbers from './numbers';
import Equation from './equation';
const Util = require('./util');

const NumColumns = 10;
const DIM_X = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];
const WIDTH = 800;
const HEIGHT = 600;
const COLORS = {
  0: "#ccff00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#fbaed2",
  6: "#ff5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073",
};

export default class Game {
    constructor(canvas) {
        this.context = canvas.getContext("2d");
        this.offsetX = canvas.offsetLeft;
        this.offsetY = canvas.offsetTop;
        this.bottomline = {};
        this.fallingNumbers = {};
        this.frameH = 0;
        this.userClicks = [];
        this.playing = false;
        this.frameId = null;
        this.equation = new Equation();
        this.newEquation = null;
        this.rightAnswer = null;
        this.fillStyle = "black";

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
        this.checkDoubleDigitAnswer = this.checkDoubleDigitAnswer.bind(this);
        this.selectUnselectNumber = this.selectUnselectNumber.bind(this);

        canvas.addEventListener("mousedown", (e) =>
            this.registerClick(e)
        );
        document.addEventListener("keydown", (e) =>
            this.keyHandler(e)
        );
    }

    keyHandler(e) {
        e.preventDefault();
        if (e.key == "Enter") {
            this.playing = true;
            this.restartGame();
        }
    }

    restartGame() {
        document.getElementById("startGame").classList.add("hidden");
        document.getElementById("endGame").classList.add("hidden");
        this.newEquation = this.equation.createEquation();
        this.rightAnswer = this.equation.rightAnswer(this.newEquation);
        this.InitialLayer();
        this.fallingNumber();
        this.animate();
    }

    gameOver(){
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        this.playing = false;
        this.context.clearRect(0, 0, WIDTH, HEIGHT);
        document.getElementById("endGame").classList.remove("hidden"); 
    }
    
    removeRightAnswerSquare() {
        console.log(this.rightAnswer);
        let that  = this;
        let arr;
        let concatString;
        for (let i = 0; i < this.userClicks.length; i++) {
            const num = this.userClicks[i];
            arr = num.split('_');
            console.log(num);
            console.log(arr);
            if (parseInt(arr[2]) === that.rightAnswer){
                if (parseInt(arr[1]) === 0) {
                    delete that.bottomline[arr[0]];
                    that.newEquation = that.equation.createEquation();
                    that.rightAnswer = that.equation.rightAnswer(
                        that.newEquation
                    );
                    that.userClicks = [];
                    break;
                } else {
                    that.fallingNumbers[arr[0]].splice(i - 1, 1);
                    that.newEquation = that.equation.createEquation();
                    that.rightAnswer = that.equation.rightAnswer(
                        that.newEquation
                    );
                    that.userClicks = [];
                    break;
                }
            } else {
                concatString += arr[2];
                this.checkDoubleDigitAnswer(concatString);
            }           
        }
    }

    checkDoubleDigitAnswer(concatString) {
        if (parseInt(concatString) === this.rightAnswer) {

        }
    }

    registerClick(e) {
        const clickedPos = {
            x: e.clientX - this.offsetX,
            y: Math.abs(e.clientY - this.offsetY) - 25,
        };
        alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
        const currentCol = this.currentColumnForUserClick(clickedPos.x);
        let fNumbers;
        let concatString;
        let num;
        let left;
        let right;
        let top;
        let bottom;
        let bNumbers;
        if (this.bottomline.hasOwnProperty(currentCol)) {
            bNumbers = [this.bottomline[currentCol]];
            for (let i = 0; i < bNumbers.length; i++) {
              num = bNumbers[i];
              left = num.pos[0];
              right = num.pos[0] + 80;
              bottom = num.pos[1];
              top = num.pos[1] - 80;
              if (
                clickedPos.x > left &&
                clickedPos.x < right &&
                clickedPos.y > top &&
                clickedPos.y < bottom
              ) {
                    console.log('registerClick Bottom')
                    this.selectUnselectNumber(num);
                    concatString = `${num.pos[0]}_0_${num.text}`;
                    this.userClicks.push(concatString);
                    alert(num.text);
                    break;
              }
            }
        }
        if (this.fallingNumbers.hasOwnProperty(currentCol)) {
            fNumbers = this.fallingNumbers[currentCol];
            for (let i = 0; i < fNumbers.length; i++) {
              num = fNumbers[i];
              left = num.pos[0];
              right = num.pos[0] + 80;
              bottom = num.pos[1];
              top = num.pos[1] - 80;
              if (
                clickedPos.x > left &&
                clickedPos.x < right &&
                clickedPos.y > top &&
                clickedPos.y < bottom
              ) {
                    console.log("registerClick falling");
                    this.selectUnselectNumber(num);
                    concatString = `${num.pos[0]}_${i+1}_${num.text}`;
                    this.userClicks.push(concatString);
                    alert(num.text);
                    break;
              }
            }
        }
        this.removeRightAnswerSquare();
    }

    selectUnselectNumber(num){
        if (num.click === true) {
            num.click = false;
        } else {
            num.click = true;
        }
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

    drawEquation() {
        this.context.strokeStyle = "black";
        this.context.font = "20px Verdana";
        this.context.strokeText(this.newEquation, 400, 15);
    }

    InitialLayer() {
        let num;
        let posAtX = 0;
        for (let i = 0; i < NumColumns; i++) {
            num = i;
            const newNumber = new Numbers([posAtX, 474], num);
            const color = newNumber.click ? "darkgrey" : "black";
            newNumber.drawSquare(this.context, color);
            this.bottomline[posAtX] = newNumber;
            posAtX += 80;
        }
    }

    drawNumbers() {
        Object.keys(this.bottomline).forEach((pos) => {
            const sq = this.bottomline[pos];
            const color = sq.click ? "darkgrey" : "black";
            sq.drawSquare(this.context, color);
        });
        Object.values(this.fallingNumbers).forEach((num) => {
            for (let i = 0; i < num.length; i++) {
                const color2 = num.click ? "darkgrey" : "black";
                num[i].drawSquare(this.context, color2);
            }
        });
    }

    randomPositionforFallingNumbers() {
        const x = DIM_X[Math.round(Math.random() * 10) % 10];
        const y = 25;
        return [x, y];
    }

    fallingNumber() {
        const pos = this.randomPositionforFallingNumbers();
        const num = Math.round(Math.random() * 10) % 10;
        const fallingNum = new Numbers(pos, num);
        const color = fallingNum.click ? "darkgrey" : "black";
        fallingNum.drawSquare(this.context, color);
        this.fallingNumbers[pos[0]] = this.fallingNumbers[pos[0]] || [];
        this.fallingNumbers[pos[0]].push(fallingNum);
        if (this.fallingNumbers[pos[0]].length === 6) {
            this.gameOver();
        }
    }

    animate() {
        if (this.playing === true) {
            this.frameH += 1;
            if (this.frameH > 250) {
                this.fallingNumber();
                this.frameH = 0;
            }
            this.context.clearRect(0, 0, WIDTH, HEIGHT);
            this.drawEquation();
            this.moveObjects();
            this.drawNumbers();

            const callback = () =>
                this.animate();

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