// 1- Optimizing box weight: you have 2 boxes A and B return subset A in increasing order
//where sum of A' weight > sum of B' weight. if More than one subset A exist, return the
//one with the maximal weight.
// Conditions:

// A & B intersection is null
// Union is equevilant to original array
// number of elements in A is minimal
// sum of A weights > sum of B weights

// Example:

// n = 5

// arr = [3, 7, 5, 6, 2]

// The 2 subsets in arr that satisfy the conditions for A are (5, 7] and [6, 7]:

// A is minimal (size 2)
// Sum(A) = (5 + 7) = 12 > Sum(B) = (2+ 3+ 6) = 11
// Sum(A) = (6 + 7) = 13 > Sum(B) = (2+ 3+ 5) = 10
// The intersection of A and B is null and their union is equal to arr.
// The subset A where the sum of its weight is maximal is [6, 7].

const sumArray = (arr) => {
  var sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const findShortestA = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
  for (let j = array.length - 1; j >= 0; j --) {
    if (sumArray(array.slice(j)) > sumArray(array.slice(0, j))) {
      return array.slice(j);
    }
  }
}