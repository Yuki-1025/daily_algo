// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

// complexity O(n^2)
var selectionSort = function(array) {
  for (let i = 0; i < array.length - 1; i ++) {
    var min = i;
    for (let j = i + 1; j < array.length; j ++)  {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // now we get a min of [i to end], need swap array.i and array.min
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}