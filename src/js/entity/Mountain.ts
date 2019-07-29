import Canvas from "../Canvas";
import Utils from "../Utils";

class Mountain {
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
            this.img.src = '../assets/sprites/mountain.png';
            this.img.onload = () => {
                this.width = this.img.width*1.5;
                // this.width = this.img.width / 10;
                this.height = this.img.height*1.5;
                // this.height = this.img.height / 10;
                resolve(true);
            }
        });
    }

    draw() {
        let ctx = Canvas.ctx;

        let x = this.x,
            y = window.innerHeight - Mountain.height,
            width = Mountain.width,
            height = Mountain.height;

        ctx.drawImage(Mountain.img, x, y, width, height);

        this.x -= .5;
        if (this.x <= -Mountain.width) this.x = window.innerWidth;
    }

    static createMountain() {
        let arr = [],
            count = Math.round(window.innerWidth / Mountain.width) * 2+2;
        for(let i = 0; i< count; i++){
            arr.push(new Mountain(i*Mountain.width));
        }
        console.log(count);
        return arr;
    }
}

export default Mountain;