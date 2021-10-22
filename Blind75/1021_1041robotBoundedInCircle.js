// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can
// receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never
// leaves the circle.

// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered
//at the origin.

var isRobotBounded = function(instructions) {
  var x = 0, y = 0;
  var dx = 0, dy = 1;
  for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] === 'G') {
          x += dx;
          y += dy;
      }
      if (instructions[i] === 'L') {
          let temp = dy;
          dy = dx;
          dx = -temp;
      }
      if (instructions[i] === 'R') {
          let temp = dx;
          dx = dy;
          dy = -temp;
      }
  }
  return (!x && !y) || dy !== 1;
};
