//Given an array of integers nums sorted in ascending order, find the starting and ending
//position of a given target value.

//If target is not found in the array, return [-1, -1].

//You must write an algorithm with O(log n) runtime complexity.

// input : asending order integer array, target number
// output : [start_index, end_index]
// constraint: O(log n);
// edgecases: cannot find target => [-1,-1]; only have one matching value => [index, index]
// [] => [-1, -1]

//complexity O(log n)
var searchRange = function(nums, target) {
  const findFirst = (nums, target) => {
      let start = 0, end = nums.length - 1;
      //let mid = Math.floor((start + end) / 2);
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) {
              if (mid === 0 || nums[mid - 1] !== target) {
                  return mid;
              } else {
                  //search left
                  end = mid - 1;
              }
          } else if (nums[mid] > target) {
              //search left
              end = mid - 1;
          } else {
              //search right
              start = mid + 1;
          }
      }
      return -1;
  };
  const findLast = (nums, target) => {
      let start = 0, end = nums.length - 1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) {
              if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                  return mid;
              } else {
                  //search right
                  start = mid + 1;
              }
          } else if (nums[mid] > target) {
              //search left
              end = mid - 1;
          } else {
              //search right
              start = mid + 1;
          }
      }
      return -1;
  }
  return [findFirst(nums, target), findLast(nums, target)];
};

var searchRange = function(nums, target) {
  var start = 0, end = nums.length - 1;
  var result = [];
  while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (nums[start] === target) {
          result.push(start);
          // search for last
          start ++;
          // if (nums[start + 1] === target) {
          //     start ++;
          // } else if (){
          //     result.push(start);
          //     return result;
          // }
      } else if (nums[end] === target) {
          result.push(end);
          // search for start
          end --;
          // if (nums[end - 1] === target) {
          //     end --;
          // } else {
          //     result.unshit(end);
          //     return result;
          // }
      } else if (nums[mid] === target) {
          if (nums[mid - 1] === target) {
              //search left for the first position of target
              end = mid - 1;
          } else {
              result.push(mid);
              // search for last
              start = mid + 1;
          }
          if (nums[mid + 1] === target) {
              // continue to search right for last position
              start = mid + 1;
          } else {
              result.push(mid);
              //search left for first
              end = mid - 1;
          }
      } else if (target > nums[mid]) {
          // search right
          start = mid + 1;
          end --;
      } else {
          // search left
          end = mid - 1;
          start ++;
      }

  }
  if (result.length === 0) {
      return [-1, -1];
  } else if (result.length === 1) {
      result = result.concat(result);
      return result;
  } else {
      result.sort((a, b) => {
          return a - b;
      })
      return result;
  }
};