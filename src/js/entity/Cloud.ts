import Canvas from "../Canvas";
import Utils from "../Utils";

class Cloud {
    private static img;
    private id;
    private x;
    private y;
    private speed;
    private static width;
    private static height;

    constructor(x = 0, y = 0, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.id = Utils.generateId();
    }

    static loadImage() {
        return new Promise(resolve => {
            this.img = new Image();
            this.img.src = '../assets/sprites/cloud.png';
            this.img.onload = () => {
                this.width = this.img.width ;
                this.height = this.img.height;
                resolve(true);
            }
        });
    }

    draw() {
        let ctx = Canvas.ctx;

        let x = this.x,
            y = this.y,
            width = Cloud.width * this.speed / 2.5,
            height = Cloud.height * this.speed / 2.5;

        ctx.drawImage(Cloud.img, x, y, width, height);

        this.x -= this.speed;
        if (this.x <= -window.innerWidth) this.x = window.innerWidth;
    }

    static createClouds() {
        let clouds = [];
        let cof = Math.round(window.innerWidth/Cloud.width);
        for (let i = 0; i < 10*cof; i++) {
            let x = Math.floor(Math.random() * window.innerWidth * 1.5),
                y = Math.floor(Math.random() * window.innerHeight / 3),
                speed = Math.floor(Math.random() * 4 + 1);

            clouds.push(new Cloud(x, y, speed));
        }

        return clouds.sort(Utils.compareObjByProp("speed"));
    }
}

export default Cloud;