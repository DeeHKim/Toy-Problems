//A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
//The robot can move either up, down, left, or right, but cannot visit the same spot twice. 
//How many possible unique paths are there to the bottom right corner?

//Make your solution work for a grid of any size.

//Parameters:

//n (required) - amount of rows/columns (max 6)

function robotPaths (n) {
  var count = 0;
  var board = makeBoard(n);
  (function recurse(row, col){
    if(row === n - 1 && col === n - 1){
      count++;
      return;
    }
    if(row < 0 || row >= n || col < 0 || col >= n || board.hasBeenVisited(row, col)){
      return;
    }
    board.togglePiece(row, col);
    recurse(row, col + 1);
    recurse(row + 1, col);
    recurse(row, col - 1);
    recurse(row - 1, col);
    board.togglePiece(row, col);
 
  })(0, 0)
  
  return count;
}


  function makeBoard(n) {
    var board = []
    for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
    Array.prototype.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
   Array.prototype.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
   return board
}
