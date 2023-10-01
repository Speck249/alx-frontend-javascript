export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new Error('Brand must be string');
    } else {
      this._brand = brand;
    }
    if (typeof motor !== 'string') {
      throw new Error('Motor must be string');
    } else {
      this._motor = motor;
    }
    if (typeof color !== 'string') {
      throw new Error('Color must be string');
    } else {
      this._color = color;
    }
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const { brand, motor, color } = this;
    const CarClass = this.constructor[Symbol.species];
    return new CarClass(brand, motor, color);
  }

  static get [Symbol.species]() {
    return this;
  }
}
