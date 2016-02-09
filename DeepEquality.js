/* Deep Equality
*  Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects 
*  is the same, and so is the structure of each of their corresponding descendants.
*/


deepEquals = function(a, b){
  var result = false;
  
  if(Object.keys(a).length === 0 && Object.keys(b).length === 0){
    return true;
  }
  
  var recurse = function(obj1, obj2){
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);
  for(var i = 0; i<key1.length; i++){
    if(key1.length !== key2.length){
      result = false;
      break;
    }
  else if(typeof obj1[key1[i]] === "object" && typeof obj2[key1[i]] === "object" ){
      recurse(obj1[key1[i]], obj2[key1[i]]);
    }
    
  else if(obj1[key1[i]] === obj2[key1[i]]){
    result = true;
  }else{
    result = false;
  }}
  };
  recurse(a, b);
  return result;
  };
  
