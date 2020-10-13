import MovingObject from './moving_object';
import Numbers from './numbers';
const Util = require('./util');

const NumColumns = 10;
const DIM_X = 800;
const DIM_Y = 600;
export default class Game {
  constructor(context) {
    this.bottomline = [];
    this.InitialLayer = this.InitialLayer.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
  }
  InitialLayer(context, NumColumns, bottomline) {
    debugger;
    let num;
    let posAtX = 0;
    console.log(bottomline);
    for (let i = 0; i < NumColumns; i++) {
        debugger
      num = Math.round(Math.random() * 10);
      const newNumber = new Numbers([posAtX, 474], num);
      console.log(newNumber);
      newNumber.drawSquare(context);
      bottomline.push(newNumber);
      posAtX += 80;
    }
  }

  randomPositionforInitialLayer() {}

  detectCollision() {}
  fallingNumber() {}
  stopFallingNumber() {}
  start() {}
  gameOver() {}
}