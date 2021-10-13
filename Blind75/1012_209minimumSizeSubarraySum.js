// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// TWO POINTERS O(n)
var minSubArrayLen = function(target, nums) {
    var left = 0, right = 0;
    var sum = nums[0];
    var min = Infinity;
    while (right < nums.length && left <= right) {
        if (sum >= target) {
            min = Math.min(right + 1 - left, min);
            sum -= nums[left];
            left++;
        } else {
            right ++;
            sum += nums[right];
        }
    }
    return min === Infinity ? 0 : min;
};

// RECURSION --> runtime error for huge input nums
var minSubArrayLen = function(target, nums) {
    var count = 0;
    const helper = (arr) => {
        count ++;
        // base case
        if (Math.max.apply(Math, arr) >= target) {
            return;
        }
        if (arr.length === 1) {
            count = 0;
            return;
        }
        var sumArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            sumArr.push(arr[i] + nums[i+count]);
        }
        return helper(sumArr);
    }

    helper(nums);
    return count;
};

