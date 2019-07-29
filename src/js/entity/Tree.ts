import Canvas from "../Canvas";
import Utils from "../Utils";
import Ground from "./Ground";

class Tree {
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
            this.img.src = '../assets/sprites/tree.png';
            this.img.onload = () => {
                this.width = this.img.width;
                this.height = this.img.height;
                resolve(true);
            }
        });
    }

    draw() {
        let ctx = Canvas.ctx;

        let x = this.x,
            y = window.innerHeight-Tree.height-Ground.height+70 ,
            width = Tree.width,
            height = Tree.height;

        ctx.drawImage(Tree.img, x, y, width, height);

        this.x -= 2 * ( this.speed / (this.speed + 0.1));
        if (this.x <= -Tree.width) this.x = window.innerWidth;
    }

    static createTrees() {
        let Trees = [];
        let cof = Math.round(window.innerWidth/Tree.width);
        console.log(cof);
        for (let i = 0; i < 15*cof; i++) {
            let x = Math.floor(Math.random() * window.innerWidth*1.5 - 100),
                speed = Math.floor(Math.random() * 4 + 1);

            Trees.push(new Tree(x, 260, speed));
        }

        return Trees.sort(Utils.compareObjByProp("speed"));
    }
}

export default Tree;