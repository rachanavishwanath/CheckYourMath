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
  console.log(clickedPos);
  return clickedPos;
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  const offsetX = canvas.offsetLeft;
  const offsetY = canvas.offsetTop;
  console.log(`offsetX: ${offsetX} offsetY: ${offsetY}`);
  let clickedPos;
  // canvas.addEventListener("mousedown", (e) =>
  //   registerClick(e, clickedPos, offsetX, offsetY)
  // );
  console.log(clickedPos);
  console.log('Its working');
  const num = new Numbers([80,170], 0);
  window.num = num;
  num.drawSquare(context);
  const game = new Game(context);
  // const gameView = new GameView(context);
  // gameView.start();
  // game.InitialLayer(context);
})