//Given a string, return true if it contains balanced parenthesis ().

function isBalanced (string) {
  var leftPar = 0;
  var rightPar = 0;
  
  for(var i = 0; i < string.length; i++){
    if(string[i] === '('){
      leftPar += 1;
    }
    if(string[i] === ')' && leftPar > 0){
      rightPar += 1;
    }
  }
  return (leftPar === rightPar);
}
