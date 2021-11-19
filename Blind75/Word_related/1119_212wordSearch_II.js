// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// ORIGINAL BACKTRACKING --- slow but passed
var findWords = function(board, words) {
  var res = [];
  for (let w of words) {
      if (exist(board, w)) res.push(w);
  }
  return res;
};
// backtracking
var exist = function(board, word) {
  // create a matrix for recording [visited or not]
 // store visited record in the original cell
  var result = false;
  var findOne = (i, row, col) => {
      if (i === word.length) {
          result = true;
          return;
      }
      if (i === 0) {
          for (let row = 0; row < board.length; row ++) {
              for (let col = 0; col < board[0].length; col ++) {
                  if (board[row][col] === word[i]) {
                      let temp = board[row][col];
                      board[row][col] = 0;
                      i ++;
                      findOne(i, row, col);
                      i --;
                      board[row][col] = temp;
                  }
              }
          }
      }
      if (i > 0) {
          let neighbors = findAdjacent(row, col, board);
          for (let neighbor of neighbors) {
              if (board[neighbor[0]][neighbor[1]] && board[neighbor[0]][neighbor[1]] === word[i]) {
                  let temp = board[neighbor[0]][neighbor[1]];
                  board[neighbor[0]][neighbor[1]] = 0;
                  i ++;
                  findOne(i, neighbor[0], neighbor[1]);
                  i --;
                  board[neighbor[0]][neighbor[1]] = temp
              }
          }
      }
  }
  findOne(0);
  return result;
};

var findAdjacent = (row, col, board) => {
  let maxR = board.length - 1;
  let maxC = board[0].length - 1;
  var neighbors = [];
  if (row - 1 >= 0) { neighbors.push([row - 1, col]); }
  if (col - 1 >= 0) { neighbors.push([row, col - 1]); }
  if (row + 1 <= maxR) { neighbors.push([row + 1, col]); }
  if (col + 1 <= maxC) { neighbors.push([row, col + 1]); }
  return neighbors;
}

//==========RUN TIME EXCEED==================================================
var findWords = function(board, words) {
  // create a dict from the board
  var dict = {};
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
          let curr = board[r][c];
          if (!dict[curr]) dict[curr] = [];
          dict[curr].push([r, c]);
      }
  }

  var res = new Set();
  // inner func- to find each word
  var findOne = (n, word, pos) => {
      if (n === word.length) {
          res.add(word);
          return;
      }
      if (!dict[word[n]]) return;
      if (n !== 0) {
          for (let i = 0; i < dict[word[n]].length; i++) {
              if (checkIfAdjacent(pos, dict[word[n]][i])) {
                  let temp = dict[word[n]][i];
                  dict[word[n]][i] = [Infinity, Infinity];
                  findOne(n+1, word, temp);
                  dict[word[n]][i] = temp;
              }
          }
      } else {
          for (let i = 0; i < dict[word[n]].length; i++) {
              let temp = dict[word[n]][i];
              dict[word[n]][i] = [Infinity, Infinity];
              findOne(n+1, word, temp);
              dict[word[n]][i] = temp;
          }
      }

  }

  for (let w of words) {
      findOne(0, w, [null, null]);
  }

  return [...res];
};

// helper func
var checkIfAdjacent = ([i1, j1], [i2, j2]) => {
  let neighbors = [[i1-1, j1], [i1+1, j1], [i1, j1+1], [i1, j1-1]];
  let map = {};
  for (let n of neighbors) map[n] = 1;
  if (map[[i2, j2]]) return true;
  return false;
}