import Canvas from "../Canvas";
import Utils from "../Utils";

class Ground {
    private static img;
    private id;
    private x;
    private static width;
    public static height;

    constructor(x = 0) {
        this.x = x;
        this.id = Utils.generateId();
    }

    static loadImage() {
        return new Promise(resolve => {
            this.img = new Image();
            this.img.src = '../assets/sprites/ground3.png';
            this.img.onload = () => {
                this.width = this.img.width;
                this.width = this.img.width / 10;
                this.height = this.img.height /3;
                this.height = this.img.height / 10;
                resolve(true);
            }
        });
    }

    draw() {
        let ctx = Canvas.ctx;

        let x = this.x,
            y = window.innerHeight - Ground.height,
            width = Ground.width,
            height = Ground.height;

        ctx.drawImage(Ground.img, x, y, width, height);

        this.x -= 4;
        if (this.x <= -Ground.width) this.x = window.innerWidth;
    }

    static createGround() {
        let arr = [],
            count = Math.round(window.innerWidth / Ground.width) * 2+2;
        for(let i = 0; i< count; i++){
            arr.push(new Ground(i*Ground.width));
        }
        console.log(count);
        return arr;
    }
}

export default Ground;