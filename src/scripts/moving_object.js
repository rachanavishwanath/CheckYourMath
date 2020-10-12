function MovingObject(obj) {
    this.pos = obj["pos"];
    this.vel = obj["vel"];
    this.color = obj["color"];
};

MovingObject.prototype.draw = function(ctx) {
    ctx.fillRect(20, 20, 80, 80);
}

MovingObject.prototype.move = function(){
    for(let i = 0; i < this.pos.length; i++){
        this.pos[i] += this.vel[i];
    }
}

MovingObject.prototype.fall = function () {

};

module.exports = MovingObject;
