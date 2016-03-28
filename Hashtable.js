//Finish this implementation of a Hash Table. 
//It should have the methods insert(), retrieve(), and remove(). 
//Your hash table need not resize itself, but should handle collisions.

  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var flag = false;
      var hash = storage[index];
      if(hash === undefined){
        hash = [[key, value]];
        storage[index] = hash;
      }else{
        for(var i = 0; i < hash.length; i++){
          if(hash[i][0] === key){
            hash[i][1] = value;
            flag = true;
          }
        }
        if(flag === false){
        hash.push([key, value]);
        storage[index] = hash;
        }
      }
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var hash = storage[index];
      if(hash){
      for(var i = 0; i < hash.length; i++){
        if(hash[i][0] === key){
          return hash[i][1];
        }
      }}
      return undefined;
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var hash = storage[index];
      if(hash){
        for(var i = 0; i < hash.length; i++){
          if(hash[i][0] === key){
            storage[index][i][1] = null;
          }
        }
      }
    }
    return table;  
  };  
  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
