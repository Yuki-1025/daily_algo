// Given an integer n, return the number of ways you can write n as the sum of consecutive
//positive integers.

// Input: n = 5
// Output: 2
// Explanation: 5 = 2 + 3

//IT'S A MATH PROB
Claim 1:-
We can have at most one k length consecutive sequence with the given sum.
For example in case of 9 we can have 2,3,4 as 3 length consecutive sequence now if we move our window then we will have either sum > 9 or sum < 9.
Claim 2:-
Suppose we have sequence of k length consecutive sequence starting from x then our sequence be:
x + (x + 1) + (x + 2) + ........ + (x + k -1)
Now this is equal to n (according to question)
=> kx + (1+2+3+4+........+k-1) = n
=> kx + (k(k-1))/2 = n
=> x = {n - (k(k-1))/2}/k
Now to find valid answers we need to find weather x is Integer or not
If it is integer then increment counter else continue

Now x can't be negative hence n - (k(k-1))/2 >= 0
=> 2n >= (k)(k-1)
=> hence max value of k can be (2n)^0.5

var consecutiveNumbersSum = function(n) {
  var res = 0;
  for (let k = 1; k*(k-1) < 2*n; k++) {
      let ans = (n - k*(k-1)/2)/k;
      if (ans - Math.floor(ans) === 0) res ++;
  }
  return res;
};