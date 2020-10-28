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
  // const game = new Game(canvas);
  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const game = new Game(canvas);
        game.restartGame();
    }
  })
  
})