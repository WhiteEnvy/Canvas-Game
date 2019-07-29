class Utils {
  public static ids = [];

  public static generateId() {
    const newId = Math.random();
    if (~this.ids.indexOf(newId)) return this.generateId();
    this.ids.push(newId);
    return newId;
  }

  public static distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  static compareObjByProp(prop, isDecreasing?) {
    if (isDecreasing) {
      return (a, b) => {
        return b[prop] - a[prop];
      };
    } else {
      return (a, b) => {
        return a[prop] - b[prop];
      };
    }
  }
}

export default Utils;
