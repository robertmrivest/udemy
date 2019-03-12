class doMath {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  set y(newy) {
    console.log('Setting Y on doMath');
    this._y = newy;
  }

  set x(newx) {
    console.log('Setting X on doMath');
    this._x = newx;
  }

  get y() {
    console.log('Getting Y on doMath');
    return this._y;
  }

  get x() {
    console.log('Getting X on doMath');
    return this._x;
  }

  // Static methods for the class
  static add(x, y) {
    return x + y;
  }
  static subtract(x, y) {
    return x - y;
  }
  static multiply(x, y) {
    return x * y;
  }
}

class superMath extends doMath {
  constructor(x, y, z) {
    super(x, y);
    this._z = z;
  }

  get z() {
    console.log('Getting Z on superMath');
    return this._z;
  }

  set z(newz) {
      console.log('Setting Z on superMath');
      this._z = newz
  }

  cube(){
      console.log ('Method from superMath')
   return this._x * this._y * this._z;
  }
}

const myMath = new superMath(1, 2, 3);
console.log(myMath.cube());
//myMath.x = 22;
console.log(doMath.add(myMath.x, myMath.y));
