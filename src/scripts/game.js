import MovingObject from './moving_object';
import Numbers from './numbers';
const Util = require('./util');

const NumColumns = 10;
const DIM_X = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];
const DIM_Y = 600;

export default class Game {
  constructor(context) {
    this.bottomline = [];
    this.InitialLayer = this.InitialLayer.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
  }
  InitialLayer(context, NumColumns, bottomline) {
    let num;
    let posAtX = 0;
    for (let i = 0; i < NumColumns; i++) {
      num = Math.round(Math.random() * 10) % 10;
      const newNumber = new Numbers([posAtX, 474], num);
      newNumber.drawSquare(context);
      bottomline.push(newNumber);
      posAtX += 80;
    }
  }

    randomPositionforFallingNumbers() {
        const x = DIM_X[Math.round(Math.random() * 10) % 10];
        const y = 0;
        return [x, y];
    }

  detectCollision() {}
  fallingNumber() {}
  stopFallingNumber() {}
  start() {}
  gameOver() {}
}