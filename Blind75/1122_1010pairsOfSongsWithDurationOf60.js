// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60

// Worst case O(nlog n)
var numPairsDivisibleBy60 = function(time) {
  var res = 0;
  // transform time to modulo of 60
  var map = {};
  for (let num of time) {
      let mod = num % 60;
      if (!map[mod]) map[mod] = 0;
      map[mod] ++;
  }
  // filter out 30 and 0;
  if (map[0]) {
      res += map[0] * (map[0] - 1) /2; //任意两个60加在一起还是60的整数倍
      delete map[0];
  }
  if (map[30]) {
      res += map[30] * (map[30] - 1) /2; //两个余数为30的数加在一起就是60的倍数
      delete map[30];
  }

  // two pointers or 2 loops to find mod + mod = 60
  var frequency = Object.entries(map);
  frequency.sort((a, b) => a[0] - b[0]);
  var start = 0, end = frequency.length - 1;
  while (start < end) {
      let sum = parseInt(frequency[start][0]) + parseInt(frequency[end][0]);
      if (sum === 60) {
          res += frequency[start][1] * frequency[end][1];
          start ++;
          end --;
      } else if (sum < 60) {
          start ++;
      } else {
          end --;
      }
  }
  return res;
};