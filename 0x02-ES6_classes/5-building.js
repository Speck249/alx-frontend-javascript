export default class Building {
  constructor(sqft) {
    if (typeof(sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('sqft must be a number');
    }

    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
   }
 
   evacuationWarningMessage() {
     if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
       throw new Error('Class extending Building must override evacuationWarningMessage');
     }
   }

   get sqft() {
     return this._sqft;
   }
}
