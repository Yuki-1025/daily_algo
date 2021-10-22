// You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts
// and verticalCuts where:

// horizontalCuts[i] is the distance from the top of the rectangular cake to the ith
//horizontal cut and similarly, and
// verticalCuts[j] is the distance from the left of the rectangular cake to the jth
//vertical cut.
// Return the maximum area of a piece of cake after you cut at each horizontal and
//vertical position provided in the arrays horizontalCuts and verticalCuts. Since the
//answer can be a large number, return this modulo 10^9 + 7.

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  var maxWidth = 0, maxHeight = 0;
  horizontalCuts.sort((a, b) => {
      return a - b;
  });
   verticalCuts.sort((a, b) => {
      return a - b;
  });
  horizontalCuts.push(h);
  horizontalCuts.unshift(0);
  verticalCuts.push(w);
  verticalCuts.unshift(0);
  for (let i = 0; i < horizontalCuts.length - 1; i++) {
      if (horizontalCuts[i+1] - horizontalCuts[i] > maxHeight) {
          maxHeight = horizontalCuts[i+1] - horizontalCuts[i];
      }
  }
  for (let j = 0; j < verticalCuts.length - 1; j++) {
      if (verticalCuts[j+1] - verticalCuts[j] > maxWidth) {
          maxWidth = verticalCuts[j+1] - verticalCuts[j];
      }
  }

  return (BigInt(maxWidth) * BigInt(maxHeight)) % BigInt(1e9 + 7);
};