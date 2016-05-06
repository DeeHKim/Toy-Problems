//Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
  var word = string.split("");
  var holdarray = [];
  var result = [];
  
  for(var i = 0; i < word.length; i++){
    if(holdarray.indexOf(word[i]) < 0){
      holdarray.push(word[i]);
      word[i] = 0;
    }
  }
  
  for(var j = 0; j < holdarray.length; j++){
    if(word.indexOf(holdarray[j]) < 0){
     result.push(holdarray[j]);
    }
  } 
  
  if(result[0] === undefined){
    return "sorry";
  }else{
  return(result[0]);
  }
}
