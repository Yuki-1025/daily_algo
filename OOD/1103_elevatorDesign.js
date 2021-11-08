// elevators
var Elevator = function(position) {
  this.position = position;
  this.maxppl = 15;
  // if up and down directions are both true, then means the elevator is idling
  this.upD = true;
  this.downD = true;

};
// methods
Elevator.prototype.up = function () {
  this.position ++
}
Elevator.prototype.down = function () {
  this.position --;
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
  //binary search TO FIND THE NEAREST ELEVATOR of the users
}
Methods for multiple requests:
1. request queue: first come, first serve
2. minHeap: find the top k nearest, then serve k
3. scan algo/elevator algo: 从头走到尾，pick途中同向的request
4. scan ahead: detect request when approaching floors. if there is no request ahead,
just stop and idle

// ============JAVA SOLUTION ===========================
class Button{
  indicator;
//getter and setter
void placeRequest();
illuminate();
doNotIlluminate();
}


class HallButton  extends Button{}

class LiftButton extends Button{}

class Elevator{
 int currentFloor;
 String direction;
 moveUp();
 moveDown();
openDoor();
closeDoor();
}

class ElevatorRequests{
 requests;
addRequest();
getRequest();
removeRequest();
}

class ElevatorController{
   List<Elevator> elevators;

  getNearestElelvator(int floor, String direction){
      //first find the elevators travelling in the requested direction
        List<Elevator> e =elevator.stream().filter(e -> e.direction == direction).collect(Collectors.toList());
       // find the closest elevator by subtracting the floor requested  and floor of elevator and figure out the closest elevator and return it.

}
}
