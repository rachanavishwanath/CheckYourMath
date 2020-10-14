export default class MovingObject {
    constructor(obj) {
        this.pos = obj["pos"];
        this.vel = obj["vel"];
        this.color = obj["color"];
        this.text = obj["text"];
        this.drawSquare = this.drawSquare.bind(this);
        this.move = this.move.bind(this);
    }

    drawSquare(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.pos[0], this.pos[1], 80, 80);
        ctx.lineWidth = 2;
        ctx.fillStyle = 'black';
        ctx.fillRect(this.pos[0], this.pos[1], 80, 80);
        ctx.fillStyle = this.color;
        ctx.font = "40px Georgia";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.pos[0]+40, this.pos[1]+40);
    }

    move() {
        this.pos[1] += 0.3;
    }

    isCollidedWith(otherNumber) { 
    }
}