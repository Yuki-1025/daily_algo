// give you two sorted list
// a = [1,3,5,7,9]
// b = [2,4,6,8,10]
// write function to merge two sorted list into one big sorted list
// c = []

// input : 2 arrays of integers, sorted
// output: new array which combine 2 input arrays, sorted
// edge case: [], [] => [];

// a = [1,2]
// b = [0]

var mergeSortedArray = (arr1, arr2) => {
	var output = []; //1,2,3,4, 5,6,7,8, 9, 10

  var i = 0, j = 0;
  while ( i < arr1.length && j < arr2.length) {
  	if (arr1[i] <= arr2[j]) {
    	output.push(arr1[i]);
      i ++; //1,2, 3,4, 5
    } else {
    	output.push(arr2[j]);
      j ++; //1,2, 3,4
    }
  }
  if (i < arr1.length) {
  	while (i < arr1.length) {
    	output.push(arr1[i]);
      i++;
    }
  }
  if (j < arr2.length) {
  	while (j < arr2.length) {
    	output.push(arr2[j]);
      j++:
    }
  }
  return output;
}

// K sorted lists
// input: arr = [[1,5,9], [2, 10], [7,8]]
// output: output = [1,2,5,7,8,9,10]

k * (2n) =2nk
var mergeMultiple = (array) => { // [[]] => []; []
	if (array.length === 1) {
  	return array[0];
  }
	var merged = mergeSortedArray(array[0], array[1]);
	for (let k = 2; k < array.length; k ++) {
  	merged = mergeSortedArray(merged, array[k]);
  }

  return merged;
}

      [. . .][. . .]

var mergeMultiple = (array) => { // [[]] => []; []
	var start = 0, end = array.length -1;
  if (start < end) {
  	var mid = Math.floor(array.length/2);
    let left = mergeMultiple(array.slice(0, mid + 1))
    let right = mergeMultiple(array.slice( mid + 1, end));
    return mergeSortedArray(left, right);
  } else {
  // base case
  	return array;
  }
}