var Vehicle = function() {
  this.parked = false;
  this.size = null;
  this.lots = null;
}

Vehicle.prototype.parked = function(){
  return this.parked;
}

//==== subclass of Vehicle ====
var Motorcycle = function () {
  Vehicle.call(this);
  this.lots = 1;
  this.size = 'motor';
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Bus = function() {
  Vehicle.call(this);
  this.lots = 5;
  this.size = 'large';
}
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

