import './styles/index.scss';
const MovingObject = require('./scripts/moving_object');
const Util = require('./scripts/util');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  console.log('Its working');
  const mo = new MovingObject({
    pos: [30, 30],
    vel: [0, 10],
    color: "#00FF00",
  });
  window.mo = mo;
  mo.draw(context);
})