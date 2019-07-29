class Canvas {
  public static dom: any = document.getElementById("scene");
  public static ctx = Canvas.dom.getContext("2d");

  public static updateSize() {
    this.dom.width = window.innerWidth;
    this.dom.height = window.innerHeight;
  }
}

export default Canvas;
