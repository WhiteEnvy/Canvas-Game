import Utils from "../Utils";
import Canvas from "../Canvas";
import Ground from "./Ground";

class Hero {
    private img;
    private imgIsLoaded;
    private imgX;
    private imgY;
    private animationStep;
    private time;
    private x;
    private y;
    private id;
  
    constructor(x=0, y=500) {
      this.img = new Image();
      this.loadImage();
      this.x = x;
      this.y = y;
      this.id = Utils.generateId();
    }
  
    loadImage() {
      this.img.src = '../assets/sprites/character-sprite-png-4.png';
      this.img.onload = () => this.imgIsLoaded = true;
      this.imgX = 0;
      this.imgY = 0;
      this.animationStep = 0;
      this.time = new Date().getTime();
    }
  
    draw() {
      if (!this.imgIsLoaded) return;
      let ctx = Canvas.ctx;
      let scale = 0.5;
      const stepX = this.img.width / 5,
            stepY = this.img.height / 2;
  
      let sx = this.imgX,
        sy = this.imgY,
        swidth = stepX,
        sheight = stepY,
        width = this.img.width/10 * scale,
        height = this.img.height/4 * scale,
        x = this.x+100,
        y = window.innerHeight-Ground.height - height + 80;
        ctx.drawImage(this.img, sx, sy, swidth, sheight, x, y, width, height);
  
        let now = new Date().getTime();
        if(this.time + 60 > now) return;
        this.time = now;
  
        this.animationStep += 1;
        this.imgX += stepX;
        if(this.animationStep == 5){
          this.imgX = 0;
          this.animationStep = 0;
        }
        this.imgY = stepY;
    }
  }

  export default Hero;