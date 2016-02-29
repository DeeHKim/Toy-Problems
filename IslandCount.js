//Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, 
//while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).
//(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. 
//In other words, when you see a break, it's actually a \n character.

function countIslands (mapStr) {
    var counter = 0;
    var counter2 = 0;
    var array = [];
    var holderarray = [];
    var result = 0;
  
    for(var i = 0; i < mapStr.length; i++){
      if(mapStr[i] === "." || mapStr[i] === "0"){
        counter++;
      }else{
         break;
      }
    }
    
    for(var q = 0; q < mapStr.length; q++){
      if(mapStr[q] === "." || mapStr[q] === "0"){
        holderarray.push(mapStr[q]);
        counter2++;
      }
      if(counter2 === counter){
        array.push(holderarray);
        holderarray = [];
        counter2 = 0;
      }
    }
  
  var recurse = function(y, x){
        array[y][x] = ".";
      if(array[y+1] && array[y+1][x] === "0"){
        recurse(y+1, x);
      }
      if(array[y-1] && array[y-1][x] === "0"){
        recurse(y-1, x);
        }
      if(array[y][x-1] && array[y][x-1] === "0"){
        recurse(y, x-1);
      }
      if(array[y][x+1] && array[y][x+1] === "0"){
        recurse(y, x+1);
      }
    }
  
  for(var i = 0; i < array.length; i++){
    for(var p = 0; p < array[i].length; p++){
     if(array[i][p] === "0"){
        result += 1;
        recurse(i, p);
      }
    }
  }
    
   return result;
}
   
    
    
