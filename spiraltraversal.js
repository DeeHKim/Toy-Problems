// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal (matrix) {
  var temp = [];
  var clone = matrix.slice();
  var result = [];
  function recurse (array) {
    if(array.length > 0){
    for(var i = 0; i < array[0].length; i++){
      temp.push(array[0][i]);
    }
    }
    array.shift();
    if(array.length > 0){
    for(var i = 0; i < array.length; i++){
      temp.push(array[i][array[i].length - 1]);
      array[i].pop();
    }
    }
    if(array.length > 0){
    for(var i = array[array.length-1].length - 1; i >= 0; i--){
      temp.push(array[array.length-1][i]);
    }
    }
    array.pop();
    if(array.length > 0){
    for(var i = array.length - 1; i >= 0; i--){
      temp.push(array[i][0]);
      array[i].shift();
    }
    }
    if(array.length > 0){
      recurse(array);
    }
  }
  recurse(matrix);
  for(var i = 0; i < (clone.length * clone[0].length); i++){
    result.push(temp[i]);
  }
  return result;
}
