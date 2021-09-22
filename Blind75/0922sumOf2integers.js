//Given two integers a and b, return the sum of the two integers without using the
//operators + and -.

// input: two integers
// output: sum, integer
// constraints: no + -
// edge case: na

var getSum = function(a, b) {
  // check if negative
  if (a < 0 && b < 0) {
      let arr1 = Array(-a);
      let arr2 = Array(-b);
      let sum = arr1.concat(arr2);
      return -sum.length;
  }
  if (a >= 0 && b >= 0) {
      let arr1 = Array(a);
      let arr2 = Array(b);
      let sum = arr1.concat(arr2);
      return sum.length;
  }
  if (a < 0 && -a <= b) {
      return Array(b).slice(-a).length;
  }
  if (a < 0 && -a > b) {
      return -Array(-a).slice(b).length;
  }
  if (b < 0 && -b <= a) {
      return Array(a).slice(-b).length;
  }
  if (b < 0 && -b > a) {
      return -Array(-b).slice(a).length;
  }
};

//=========================================================
var getSum = function(a, b) {
  var product = 10 ** a * 10 ** b;
  return Math.log10(product);
}