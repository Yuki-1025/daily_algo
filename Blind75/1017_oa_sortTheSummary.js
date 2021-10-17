// similar to LEETCODE 347 top k frequency

//example:
// input: arr = [3,3,1,2,1];
// output: [[3,2], [1,2], [2,1]]; [number, frequency in arr] in descending order;
// if same frequency, should be sorted ascending

// O(n log n);
function sortSummary (arr) {
  // store num and freq in an object
  var frequency = {};
  for (let i = 0; i < arr.length; i ++) {
    if (frequency[arr[i]] === undefined) {
      frequency[arr[i]] = 1;
    } else {
      frequency[arr[i]]++;
    }
  }
  // convert the object into array; i could use Object.entries(), but then the keys would be string['3', 2]
  var output = [];
  for (let k in frequency) {
    output.push([Number.parseInt(k), frequency[k]]);
  }
  // sort new array
  output.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return b[1] - a[1];
  })

  return output;
}