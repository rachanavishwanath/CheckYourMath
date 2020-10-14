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
        this.fallingNumbers = [];
        this.frameH = 0;

        this.InitialLayer = this.InitialLayer.bind(this);
        this.registerClick = this.registerClick.bind(this);
        this.fallingNumber = this.fallingNumber.bind(this);
        this.drawEquation = this.drawEquation.bind(this);
        this.drawNumbers = this.drawNumbers.bind(this);
        this.animate = this.animate.bind(this);

        this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
        this.fallingNumber(context, this.fallingNumbers);

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
        const clickedPos = {
            x: e.clientX,
            y: e.clientY,
        };
        alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
        for (let i = 0; i < this.fallingNumbers.length; i++) {
        let num = this.fallingNumbers[i];
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
            alert(num.text);
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

        Object.keys(bottomline).forEach(pos => {
            console.log('redraw bottomLine')
            console.log(bottomline);
            const sq = bottomline[pos]; 
            // console.log(sq);
            sq.drawSquare(context);
        })
        fallingNumbers.forEach(num => {
            console.log(fallingNumbers);
            console.log(num.pos);
            num.drawSquare(context);
        })
    }

    randomPositionforFallingNumbers() {
        const x = DIM_X[Math.round(Math.random() * 10) % 10];
        const y = 25;
        return [x, y];
    }

    detectCollision() {
        
    }

    fallingNumber(context, fallingNumbers) {
        const pos = this.randomPositionforFallingNumbers();
        const num = Math.round(Math.random() * 10) % 10;
        const fallingNum = new Numbers(pos, num);
        fallingNum.drawSquare(context);
        fallingNumbers.push(fallingNum);
    }

    animate(context, equation, bottomline, fallingNumbers) {

        this.frameH += 1;
        if (this.frameH > 250) {
            this.fallingNumber(context, fallingNumbers);
            this.frameH = 0;
        }
        // clear the canvas
        context.clearRect(0, 0, 800, 600);
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

    moveObjects() {
        for (let i = 0; i < this.fallingNumbers.length; i++) {
            this.fallingNumbers[i].move();
        }
    }

    draw(context) {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        this.fallingNumbers.forEach((num) => {
        num.drawSquare(context);
        });
    }

    clickedNumber() {}

    stopFallingNumber() {

    }
    start() {}
    gameOver() {}
}