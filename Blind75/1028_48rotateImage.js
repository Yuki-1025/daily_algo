// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees
//(clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D
//matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// TRANSPOSE A MATRIX IN JS
matrix[0].map((col, c) => {
  return matrix.map((row, r) => {
    return matrix[r][c];
  })
})

// ROTATE 90D = step1.TRANSPOSE; step2.REVERSE column order
var rotate = function(matrix) {
  // edge case
  if (matrix.length === 1) {
      return matrix;
  }
  // first transpose then reverse columns
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
          let temp = matrix[i][j];
          matrix[i][j] =  matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  // reverse column order
  let start = 0, end = matrix[0].length - 1;
  while (start < end) {
      matrix.forEach((row, r) => {
          let temp = matrix[r][start];
          //console.log(row);
          matrix[r][start] = matrix[r][end];
          matrix[r][end] = temp;
          //console.log(row);
      })
      start ++;
      end --;
      //console.log(matrix)
  }
  return matrix;
};