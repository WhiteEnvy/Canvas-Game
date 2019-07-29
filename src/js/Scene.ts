import Canvas from "./Canvas";

class Scene {
  public children;
  public animations = [];

  constructor() {
    this.children = {};
  }

  public add(mesh) {
    this.children[mesh.id] = mesh;
  }

  public remove(mesh) {
    delete this.children[mesh.id];
  }

  public render() {
    requestAnimationFrame(this.render.bind(this));
    Canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);


    window['lines'] = [];
    Object.values(this.children).map((child: any) => child.draw());
    this.animations.map(anim => anim());
  }
}

export default Scene;
