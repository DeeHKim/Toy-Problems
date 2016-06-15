//Given a single input string, write a function that produces all
//possible anagrams of a string and outputs them as an array.

function allAnagrams (string) {
  var result = [];
  var array = string.split('');
  
  function recurse(arr, temp) {
    if(temp.length === string.length && result.indexOf(temp) === -1){
      result.push(temp);
      return;
    }
    if(temp.length === string.length){
      return;
    }
    for(var i = 0; i < arr.length; i++){
      var copy = arr.slice();
      var curr = temp + arr[i];
      copy.splice(i, 1);
      recurse(copy, curr);
    }
  }
  
  recurse(array, '');
  return result;
  
}
