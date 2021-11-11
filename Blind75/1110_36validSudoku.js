// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

var isValidSudoku = function(board) {
  // check every row
  for (let row = 0; row < board.length; row ++) {
      if(!checknoDuplicates(board[row])) return false;
  }
  // check every col
  for (let col = 0; col < 9; col ++) {
      let temp = []
      for (let row = 0; row < 9; row ++) {
          temp.push(board[row][col]);
      }
      if (!checknoDuplicates(temp)) return false;
  }
  // check every 3x3
  for (let k = 0; k <= 6; k += 3) {
      for (let n = 0; n <= 6; n += 3) {
          let temp = [];
          for (let row = k; row < k + 3; row ++) {
              for (let col = n; col < n + 3; col ++) {
                  temp.push(board[row][col]);
              }
          }
          if (!checknoDuplicates(temp)) return false;
      }
  }
  return true;
};

var checknoDuplicates = (arr) => {
  var map = {};
  for (let el of arr) {
      if (el !== '.') {
          if (!map[el]) {
              map[el] = 1;
          } else {
              return false;
          }
      }
  }
  return true;
}