/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */
// input: array
// output: sorted array

var quicksort = function (array) {
  // base case / edge case
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  array = array.slice(1);
  var left = array.filter((ele) => {
    return ele < pivot;
  })
  var right = array.filter((ele) => {
    return ele >= pivot;
  })
  // recursive case
  return quicksort(left).concat(pivot, quicksort(right));
}

