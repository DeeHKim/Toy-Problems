Even Occurrence

//Find the first item that occurs an even number of times in an array. Remember to handle 
//multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.


function evenOccurrence (arr) {
  var counter = 0;
  var result = null;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]){
        counter++;
      }
    }
    if(counter % 2 === 0){
      result = arr[i];
      return result;
    }
    counter = 0;
  }
  return result;
}
