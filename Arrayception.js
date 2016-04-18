// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

function arrayception (array) {
  var count = 0;
  function recurse (arr, depth) {
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        recurse(arr[i], depth+1);
      }else if(depth > count) {
        count = depth;
       }
    }
  }
  recurse(array, 1);
  return count;
}
