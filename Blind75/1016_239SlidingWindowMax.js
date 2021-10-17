// You are given an array of integers nums, there is a sliding window of size k which is moving from
//the very left of the array to the very right. You can only see the k numbers in the window.
//Each time the sliding window moves right by one position.

// Return the max sliding window.
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// O(n)
var maxSlidingWindow = function(nums, k) {
	if (k === 1) { return nums; }
	var q = [], output = [];
	q.push([nums[0], 0]);
	for (let i = 1; i < nums.length; i ++) {
			if (q[0][1] < i - k + 1) {
					//output.push(q[0][0]);
					q.shift();
			}
			if (q.length) {
					if (nums[i] >= q[0][0]) {
							q = [];
							q.push([nums[i], i]);
					} else if (nums[i] >= q[q.length - 1][0]) {
							while (nums[i] >= q[q.length - 1][0]) {
									q.pop();
							}
							q.push([nums[i], i]);
					} else {
							q.push([nums[i], i]);
					}
			} else {
					q.push([nums[i], i])
			}

			if (i >= k - 1) {
					output.push(q[0][0]);
			}
	}
	return output;
};

// O(kn): because k is defined by user which might be n/2, kn == n^2
var findMaxArray = (nums, k) => {
	var output = [];
	for (let i = 0; i <= nums.length - k; i ++) {
  	output.push(Math.max.apply(null, nums.slice(i, i + k)));
  }
  return output;
}
// unfinished a little better solution :
var findMaxArray = (nums, k) => {
	var output = [];
  var max = nums[0], idx = 0;
  nums.slice(0, k).forEach((el, i) => {
  	if(el > max) {
   		max = el;
    	idx = i;
    }
  })
	for (let i = 1; i <= nums.length - k; i ++) {
  	if (i > idx) {
    	// find the max
    } else {
    	if (nums[i + k - 1] >= max) {
      	max = nums[i + k - 1];
        idx = i + k - 1;
      }
    }
  }
  return output;
}