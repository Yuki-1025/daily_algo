// You are given an integer length and an array updates where updates[i] = [startIdxi, endIdxi, inci].

// You have an array arr of length length with all zeros, and you have some operation to apply on arr. In the ith operation, you should increment all the elements arr[startIdxi], arr[startIdxi + 1], ..., arr[endIdxi] by inci.

// Return arr after applying all the updates.

Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
Output: [-2,0,3,5,3]
// the most optimal solution: O(k+n)
// 反向思维的prefix
var getModifiedArray = function(length, updates) {
  var arr = Array(length).fill(0);
  for (let [start, end, num] of updates) {
      arr[start] += num; //只需要标记+num的start,因为之后prefix sum会把后面全加上
      if (end + 1 < length) arr[end + 1] -= num; // 在+num结束后-num 防止整个arr全+num
  }
  //what we need is the prefix sum of the arr
  for (let i = 1; i < length; i++) {
      arr[i] = arr[i-1] + arr[i];
  }
  return arr;
};

// the most intuitive solution: O(kn)
var getModifiedArray = function(length, updates) {
  var arr = Array(length).fill(0);
  for (let [start, end, num] of updates) {
      while (start <= end) {
          arr[start] += num;
          start ++;
      }
  }
  return arr;
};