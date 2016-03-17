// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
// A single array item will count as a contiguous sum.

function sumArray (array) {
  var highest = array[0];
  for(var i = 0; i < array.length; i++){
    var current = 0;
    for(var j = i; j < array.length; j++){
      current = current + array[j];
      if(current > highest){
        highest = current; 
      } 
    }
  } 
  return highest;
}
