// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// input: an array of non-negative numbers
// output: a number
// constraints:
// edge case: if the price consecutively reduces, return 0

var maxProfit = function(prices) {
  var result = 0;
  //handle edge case
  var isEdge = true;
  for (let i = 0; i < prices.length - 1; i ++) {
      if (prices[i + 1] > prices[i]) {
          isEdge = false;
          break;
      }
  }
  if (isEdge) {
      return result;
  }
  // handle normal cases
  for (let j = 0; j < prices.length - 1; j++) {
      for (let k = j + 1; k < prices.length; k ++) {
          if (prices[k] - prices[j] > result) {
              result = prices[k] - prices[j];
          }
      }
  }
  return result;
};

// to improve:
//for each start, sort the subsequent numbers, and calculate the difference between start and the last one
var maxProfit = function(prices) {
  var result = 0;
  //handle edge case
  var isEdge = true;
  for (let i = 0; i < prices.length - 1; i ++) {
      if (prices[i + 1] > prices[i]) {
          isEdge = false;
          break;
      }
  }
  if (isEdge) {
      return result;
  }
  // handle normal cases
  for (let j = 0; j < prices.length - 1; j++) {
      var subArr = prices.slice(j + 1);
      var diff = Math.max(...subArr) - prices[j];
      if (diff > result) {
          result = diff;
      }
  }
  return result;
};