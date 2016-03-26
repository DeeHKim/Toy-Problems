var hasCycle = function(linkedList){
  var one = linkedList;
  var two = linkedList;
  while(two != null && two.next !== null){
    one = one.next;
    two = two.next.next;
    
    if(one === two){
      return true;
    }
  }
  return false;
};
