// singleton class
var Employee = function (number) {
  this.available = number;
  this.toAdd = true;
};
// get call
Employee.prototype.getCall = function() {
  if (this.toAdd) {
    this.available --;
  }
  if (this.available === 0) this.toAdd = false;
};
// hang up
Employee.prototype.cancelCall = function() {
  this.available ++;
  if (this.available > 0) this.toAdd = true;
};
// subclasses
var Respondent = function (number) {
  Employee.call(this, number);
  this.order = 1;
};
Respondent.prototype = Object.create(Employee.prototype);
Respondent.prototype.constructor = Respondent;

var Manger = function (number) {
  Employee.call(this, number);
  this.order = 2;
};
Manger.prototype = Object.create(Employee.prototype);
Manger.prototype.constructor = Manger;

var Director = function (number) {
  Employee.call(this, number);
  this.order = 3;
};
Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Director;

var CallCenter = function(num1, num2, num3) {
  this.res = new Respondent(num1);
  this.mag = new Manager(num2);
  this.dir = new Director(num3);
}

CallCenter.prototype.assignCall = function() {
  if (this.res.toAdd) this.res.getCall();
  if (this.mag.toAdd) this.mag.getCall();
  if (this.dir.toAdd) this.dir.getCall();
}