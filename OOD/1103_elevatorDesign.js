// elevators
var Elevator = function(position) {
  this.position = position;
};
// methods
Elevator.prototype.up = function () {

}
Elevator.prototype.down = function () {

}

// users
var Button = function (floor) {
  this.floor = floor;
  this.isUp = true;
}

var Elevators = function (positions) {
  this.list = [];
  for (let p of positions) {
    this.list.push(new Elevator(p));
  }
}
Elevators.prototype.getNearestElevator = function(floor) {
  //binary search
}