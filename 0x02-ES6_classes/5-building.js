export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    } else {
      this._sqft = sqft;
    }

    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(' Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
