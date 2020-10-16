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
        // const equation = new Equation();
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

    removeRightAnswerSquare(currentCol) {
        console.log(this.rightAnswer);
        let that  = this;
        this.userClicks.forEach((num) => {
        if (that.rightAnswer < 10) {
            debugger;
            if (num.text === this.rightAnswer && num.pos[1] === 474) {
                debugger;
                delete this.bottomline[num.pos[0]];
                this.userClicks = [];
                that.newEquation = that.equation.createEquation();
                console.log(this.bottomline);
                console.log(`right answer`);
            } else {
                this.fallingNumbers[currentCol];
            }
        }
        });
    }

    registerClick(e) {
        console.log(this.offsetX);
        console.log(this.offsetY);
        debugger
        const clickedPos = {
            x: e.clientX - this.offsetX,
            // y: e.clientY
            y: Math.abs(e.clientY - this.offsetY) - 25,
        };
        alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
        const currentCol = this.currentColumnForUserClick(clickedPos.x);
        let fNumbers;
        let allNumbers;
        let left;
        let right;
        let top;
        let bottom;
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
            // clickedPos.y >= top &&
            clickedPos.y <= bottom
        )   {
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

    drawEquation() {
        this.context.strokeStyle = "black";
        this.context.font = "20px Verdana";
        this.context.strokeText(this.newEquation, 400, 15);
    }

    InitialLayer() {
        let num;
        let posAtX = 0;
        for (let i = 0; i < NumColumns; i++) {
        num = Math.round(Math.random() * 10) % 10;
        const newNumber = new Numbers([posAtX, 474], num);
        newNumber.drawSquare(this.context);
        this.bottomline[posAtX] = newNumber;
        posAtX += 80;
        }
    }

    drawNumbers() {
        Object.keys(this.bottomline).forEach((pos) => {
        const sq = this.bottomline[pos];
        sq.drawSquare(this.context);
        });
        Object.values(this.fallingNumbers).forEach((num) => {
        for (let i = 0; i < num.length; i++) {
            num[i].drawSquare(this.context);
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
        fallingNum.drawSquare(this.context);
        this.fallingNumbers[pos[0]] = this.fallingNumbers[pos[0]] || [];
        this.fallingNumbers[pos[0]].push(fallingNum);
        if (this.fallingNumbers[pos[0]].length === 6) {
        this.gameOver();
        }
    }

    animate() {
        if (this.playing === true) {
        this.frameH += 1;
        if (this.frameH > 50) {
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