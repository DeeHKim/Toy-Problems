//Given an array of arrays, return all elements in a single array. You must use recursion.

function flatten (arrays) {
  var result = [];
  function recurse(el) {
    for(var i = 0; i < el.length; i++){
      if(Array.isArray(el[i])){
        recurse(el[i]);
      }else{
        result.push(el[i]);
      }
    }
  }
  recurse(arrays);
  return result;
}
