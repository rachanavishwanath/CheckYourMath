import './styles/index.scss';
import MovingObject from './scripts/moving_object';
import Numbers from './scripts/numbers';
import Game from './scripts/game';
const Util = require('./scripts/util');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  console.log('Its working');
  const num = new Numbers([0,100], 0);
  window.num = num;
  num.drawSquare(context);
  const game = new Game(context);
  // game.InitialLayer(context);
})