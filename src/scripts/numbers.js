import MovingObject from "./moving_object";
const Util = require("./util");
const COLORS = {
  0: "#CCFF00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#FBAED2",
  6: "#FF5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073",
};
export default class Numbers {
    constructor(pos, text) {
        // number inside square
        this.text = text;
        const obj = {
          pos: pos,
          vel: Util.randomVec(2),
          color: COLORS[this.text],
          text: this.text,
        };
        MovingObject.call(this, obj);
    }
};

Util.inherits(Numbers, MovingObject);