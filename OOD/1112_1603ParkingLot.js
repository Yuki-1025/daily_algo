// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

var ParkingSystem = function(big, medium, small) {
  this.capL = big;
  this.capM = medium;
  this.capS = small;
  this.carS = 0;
  this.carM = 0;
  this.carL = 0;
};

/**
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function(carType) {
  if (carType === 1 && this.carL < this.capL) {
    this.carL ++;
    return true;
  } else if (carType === 2 && this.carM < this.capM) {
    this.carM ++;
    return true;
  } else if (carType === 3 && this.carS < this.capS) {
    this.carS ++;
    return true;
  }
  return false;
};
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
