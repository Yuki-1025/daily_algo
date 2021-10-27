// Example
// book = '01001'
// The following sequences of pages match the criterion:
// [1, 2 ,3], that is, 01001 → 010.
// [1, 2 ,4], that is, 01001 → 010.
// [2, 3 ,5], that is, 01001 → 101.
// [2, 4 ,5], that is, 01001 → 101.

// The answer is 4.

var numberOfways = (book) => {
  var allways = new Set();
  var lastone = book[0];
  var way = [lastone];
  for (let i = 1; i < book.length; i ++) {
    if (book[i] !== lastone) {
      way.push
    }
  }
}