const MovingObject = require("./moving_object");
const Util = require("./util");

function Numbers(pos){
    const obj = {
      pos: pos,
      vel: Util.randomVec(2),
      radius: 10,
      color: "#000000",
      game: game,
    };

    MovingObject.call(this, obj);
};

Util.inherits(Numbers, MovingObject);

module.exports = Numbers;