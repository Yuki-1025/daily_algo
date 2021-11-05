//Board
var Board = function () {
  this.state = null;
};
Board.prototype.initiate = () => {
  this.state = Array(8).fill(0).map((row) => Array(8).fill(0));
}


// Piece
var Piece = function(position) {
  this.position = position;
  this.isWhite = false;
  this.iskilled = false;
};

// subclasses of Piece
var Pawn = function(position) {
  Piece.call(this, position);
};
Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;
  //method
Pawn.prototype.move = ()