import Game from './game';

export default class GameView {
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
        this.start = this.start.bind(this);
        this.animate = this.animate.bind(this);
    }

    start (){
        let that = this;
        const callback = function () {
            that.game.moveObjects(), 
            that.game.draw(that.ctx);
        };
        setInterval(callback.bind(that), 20);
    }

    animate() {
        this.game.moveObjects();
        requestAnimationFrame(this.animate);
    }
}