





// O(kn)
var findMaxArray = (nums, k) => {
	var output = [];
	for (let i = 0; i <= nums.length - k; i ++) {
  	output.push(Math.max.apply(null, nums.slice(i, i + k)));
  }
  return output;
}

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