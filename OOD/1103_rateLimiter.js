// Design a class for frequent call

//  In a class, every call of the function, isTooFrequent(), will be recorded once per call.
//  If it is called more than 10 times in 5min, it will return True, otherwise return False.
//  At the same time, there is a now_time(), which returns the current time every call.
//  How to implement isTooFrequent() and now_time() in class?

var Call = function (number, time) {
  this.number = number;
  this.timesin5 = 1;
  this.calltime = [time];
  // make isTooFrequent a private method
};

Call.prototype.isTooFrequent = function() {
  return this.timesin5 > 10 ? true : false;
};
Call.prototype.addOne = function() {
  let curr = Date.now()/1000;
  this.calltime.push(curr);
  this.timesin5 ++;
  while (curr - this.calltime[0] > 300) {
    this.calltime.shift();
    this.timesin5 --;
  }
  return this.isTooFrequent();
}
// user pool
var Calls = function () {
  this.pool = {};
}

Calls.prototype.addCall = function (number) {
  if (this.pool[number]) {return this.pool[number].addOne();}
  else {this.pool[number] = new Call(number, Date.now()/1000);};
}
