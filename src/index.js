import './styles/index.scss';
import MovingObject from './scripts/moving_object';
import Numbers from './scripts/numbers';
import Game from './scripts/game';
import GameView from './scripts/game_view';

const Util = require('./scripts/util');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  canvas.setAttribute("width", "800px");
  canvas.setAttribute("height", "600px");
  debugger
  console.log(`window:width ${window.innerWidth}`);
  console.log(`window:height ${window.innerHeight}`);
  const context = canvas.getContext('2d');
  const offsetX = canvas.offsetLeft;
  const offsetY = canvas.offsetTop;
  const game = new Game(canvas);
})