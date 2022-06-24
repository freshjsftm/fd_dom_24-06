class Slider {
  constructor(collection = [], currentIndex = 0) {
    this._collection = collection;
    this.currentIndex = currentIndex;//number >=0 whole
  }
  set currentIndex(value) {  
    if(typeof value !== 'number' || value<0 || !Number.isInteger(value)){ 
      throw new Error('invalid data value')
    }
    this._currentIndex = value;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  get collection() {
    return this._collection;
  }
  get currentSlide() {
    return this._collection[this._currentIndex];
  }
  next(){ return this._currentIndex+1; }
  prev(){ return this._currentIndex-1; }
}
