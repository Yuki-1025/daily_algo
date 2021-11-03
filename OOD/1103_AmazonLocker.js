// Lockers
var Locker = function(size, code) {
  this.size = size;
  this.isFilled = false;
  this.code = code;
};

var Lockers = function(arrangements) {// [[code, size], ...]
  this.storage = {};
  for (let a of arrangements) {
    this.storage[a[0]] = new Locker(a[1], a[0]);
  }
};
Lockers.prototype.fill = function (package) {
  let minSize = package.size;
  let availableSizes = [];
  for (let l of Object.values(this.storage)) {
    if (!l.isFilled) availableSizes.push([l.code, l.size]);
  }
  availableSizes.sort((a, b) => a - b);
  // binary search or iteration to find the minimum doable size
  for (let i = 0; i < availableSizes.length; i++) {
    if (availableSizes[i][1] >= minSize) {
      this.storage[availableSizes[i][0]].isFilled = true;
      package.inLocker = true;
      break;
    }
  }
}

Lockers.prototype.pickUp = function(code) {
  if (!this.storage[code]) throw Error;// wrong code message
  this.storage[code].isFilled = false;//empty the locker
}
//Packages
var Package = function(size) {
  this.size = size;
  this.inLocker = false;
};

//TESTING
var arrangements = [
  ['ab', 1],
  ['ac', 1],
  ['ad', 2],
  ['ae', 3]
]
var lockers1 = new Lockers(arrangements);
var package1 = new Package(1);