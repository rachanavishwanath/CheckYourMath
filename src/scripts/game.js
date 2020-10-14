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
    constructor(context) {
        this.bottomline = {};
        this.fallingNumbers = [];
        this.InitialLayer = this.InitialLayer.bind(this);
        this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
        this.fallingNumber = this.fallingNumber.bind(this);
        this.fallingNumber(context, this.fallingNumbers);
        const equation = new Equation();
        const newEq = equation.createEquation();
        this.drawEquation = this.drawEquation.bind(this);
        this.drawEquation(context, newEq);
        this.rightAnswer = equation.rightAnswer(newEq);
        console.log(newEq, this.rightAnswer);
        context.addEventListener('mousedown', (e) => {
              const clickedPos = {
                x: e.clientX - offsetX,
                y: e.clientY - offsetY,
              };
              alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
              console.log(clickedPos);
            //   return clickedPos;
        })
    }

    drawEquation(context, equation){
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
    }

    randomPositionforFallingNumbers() {
        const x = DIM_X[Math.round(Math.random() * 10) % 10];
        const y = 25;
        return [x, y];
    }

    detectCollision() {}

    fallingNumber(context, fallingNumbers) {
        const pos = this.randomPositionforFallingNumbers();
        const num = Math.round(Math.random() * 10) % 10;
        const fallingNum = new Numbers(pos, num);
        fallingNum.drawSquare(context);
        fallingNumbers.push(fallingNum);
        console.log(fallingNumbers);
        this.moveObjects();
    }

    moveObjects(){
        for(let i = 0; i < this.fallingNumbers.length; i++){
            while (this.fallingNumbers[i].pos[1] < 400) {
                this.fallingNumbers[i].move();
            }
        }
    }

    draw(context) {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        this.fallingNumbers.forEach(num => {
            num.drawSquare(context);
        })
    }

    clickedNumber() {

    }

    stopFallingNumber() {}
    start() {}
    gameOver() {}
}