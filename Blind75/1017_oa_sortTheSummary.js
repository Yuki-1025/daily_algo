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

// MAP VS OBJECT
// keys of object are strings; keys of map can be any value
// can get the size of a map: map.size; need track size of obj
var map = new Map();
map.set('key', 1);
map.get('key');
if(map.has('key'));
map.delete('key');
map.size;
// ======using map instead of obj
function sortSummary (arr) {
  // store num and freq in a map
  var frequency = new Map();
  for (let i = 0; i < arr.length; i ++) {
    if (!frequency.has(arr[i])) {
      frequency.set(arr[i], 1);
    } else {
      frequency.set(arr[i], frequency.get(arr[i]) + 1);
    }
  }
  // convert the map into array; i could use Object.entries(), but then the keys would be string['3', 2]
  var output = Array.from(frequency.entries());// OR [...frequency.entries()]

  // sort new array
  output.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return b[1] - a[1];
  })

  return output;
}