import './styles/index.scss';
import MovingObject from './scripts/moving_object';
import Numbers from './scripts/numbers';
import Game from './scripts/game';
const Util = require('./scripts/util');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  console.log('Its working');
  // const num = new Numbers([0,474], 0);
  // const num1 = new Numbers([80, 474], 1);
  // const num2 = new Numbers([160, 474], 2);
  // const num3 = new Numbers([240, 474], 3);
  // const num4 = new Numbers([320, 474], 4);
  // const num5 = new Numbers([400, 474], 5);
  // const num6 = new Numbers([480, 474], 6);
  // const num7 = new Numbers([560, 474], 7);
  // const num8 = new Numbers([640, 474], 8);
  // const num9 = new Numbers([720, 474], 9);
  // window.num = num;
  // num.drawSquare(context);
  // num1.drawSquare(context);
  // num2.drawSquare(context);
  // num3.drawSquare(context);
  // num4.drawSquare(context);
  // num5.drawSquare(context);
  // num6.drawSquare(context);
  // num7.drawSquare(context);
  // num8.drawSquare(context);
  // num9.drawSquare(context);
  const game = new Game(context);
  // game.InitialLayer(context);
})