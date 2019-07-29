import Canvas from "./Canvas";
import Scene from "./Scene";
import Ground from "./entity/Ground";
import Hero from "./entity/Hero";
import Cloud from "./entity/Cloud";
import Tree from "./entity/Tree";
import Mountain from "./entity/Mountain";

class Game {
  public scene;

  constructor() {
    this.scene = new Scene();
  }

  public async init() {
    Canvas.updateSize();

    await Ground.loadImage();
    await Cloud.loadImage();
    await Tree.loadImage();
    await Mountain.loadImage();


    Mountain.createMountain().forEach(mountain => this.scene.add(mountain));
    Cloud.createClouds().forEach(cloud => this.scene.add(cloud));

    Tree.createTrees().forEach(tree => this.scene.add(tree));

    Ground.createGround().forEach(ground => this.scene.add(ground));



    this.scene.add(new Hero());
   

    this.scene.render();
    return this;
  }
}

export default Game;
