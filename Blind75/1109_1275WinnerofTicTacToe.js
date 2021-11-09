// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O'
// characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column,
// or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will
// be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case
//the game ends in a draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is
// initially empty, and A will play first.
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.

var tictactoe = function(moves) {
  // rows and cols to store hori and vertical wins
  var rows = Array(3).fill(0);
  var cols = Array(3).fill(0);
  // to store diagnal wins
  var diag1 = 0;
  var diag2 = 0;

  // start the game
  let player = -1;
  for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
      player = -player;
      rows[move[0]] += player;
      cols[move[1]] += player;
      // check if diagnal
      if (move[0] === move[1]) diag1 += player;
      if (move[0] + move[1] === 2) diag2 += player;
      //console.log(move);
      // check if after this move, we are at win state
      if (diag1 === 3 || diag2 === 3) return 'A';
      if (diag1 === -3 || diag2 === -3) return 'B';
      for (let r of rows) {
          if (r === 3) return 'A';
          if (r === -3) return 'B';
      }
      for (let c of cols) {
          if (c === 3) return 'A';
          if (c === -3) return 'B';
      }
  }
  return moves.length === 9 ? 'Draw' : 'Pending';
};
