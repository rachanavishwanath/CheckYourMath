import './styles/index.scss';
import MovingObject from './scripts/moving_object';
import Numbers from './scripts/numbers';
import Game from './scripts/game';
import GameView from './scripts/game_view';

const Util = require('./scripts/util');

function registerClick(e, clickedPos, offsetX, offsetY) {
  clickedPos = {
    x: e.clientX - offsetX,
    y: e.clientY - offsetY,
  };
  alert(`clicked at ${clickedPos.x} ${clickedPos.y}`);
  return clickedPos;
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  const offsetX = canvas.offsetLeft;
  const offsetY = canvas.offsetTop;
  const game = new Game(canvas);
})