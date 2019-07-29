// import Canvas from "./Canvas";
// import Utils from "./Utils";
// window['lines'] = [];

// class Point {
//   public x;
//   public y;
//   public r;
//   public id;
//   public lines;
//   public step;

//   constructor(x, y) {
//     this.id = Utils.generateId();
//     this.x = x;
//     this.y = y;
//     this.r = 5;
//     this.step = {x: Math.random()-0.5, y: Math.random()-0.5};
//   }

//   public draw() {
//     this.move({x: this.x+this.step.x, y: this.y+this.step.y});
//     Canvas.ctx.beginPath();
//     Canvas.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     Canvas.ctx.fillStyle = "rgba(0, 0, 0, 1)";
//     Canvas.ctx.fill();
//     this.connect();
//   }

//   public move(pos) {
//     this.x = pos.x;
//     this.y = pos.y;

//     if(this.x > window.innerWidth) this.x = 0; 
//     if(this.x < 0) this.x = window.innerWidth; 
//     if(this.y > window.innerHeight) this.y = 0; 
//     if(this.y < 0) this.y = window.innerHeight; 
//   }

//   public connect() {
//     if (!window["game"]) return;
//     let pos = { x: this.x, y: this.y };
//     let dots = Object.values(window["game"].scene.children);
//     let closestDots = dots.filter((dot: any) => {
//       return (
//         Utils.distance(pos, { x: dot.x, y: dot.y }) < 150 && dot.id !== this.id
//       );
//     });

//     this.lines = closestDots.map((dot:any) => {
//       return {p1: this, p2: dot}
//     })

//     this.lines = this.lines.filter(line => {
//       return window['lines'].filter(gline => {
//         gline.p1 == line.p1 && gline.p2 == line.p2 || gline.p2 == line.p1 && gline.p1 == line.p2
//       })[0] == undefined
//     });

//     // console.log(this.lines.length);

//     if(!this.lines.length) return;

//     this.lines.map(line => window['lines'].push(line));

//     // window['lines'] = [...window['lines'], ...this.lines];

//     this.lines.map((line: any) => {
//       Canvas.ctx.beginPath();
//       Canvas.ctx.strokeStyle = "rgba(0,0,0,0.1)"
//       Canvas.ctx.moveTo(line.p1.x, line.p1.y);
//       Canvas.ctx.lineTo(line.p2.x, line.p2.y);
//       Canvas.ctx.stroke();
//     });
//   }

//   // checkFill(){
//   //   window['lines'].map(line => {
        
//   //   })
//   // }
// }

// export default Point;
