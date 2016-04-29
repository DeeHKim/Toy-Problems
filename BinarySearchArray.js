//Given a sorted array of integers, find the index of a target value using a binary search algorithm.

//A binary search finds an item in a sorted array by repeatedly choosing a middle value and
//dividing the search interval in half. The initial interval includes the whole array. 
//If the value of the target value is less than the middle value of the interval, 
//then the next interval will be the lower half of the current interval. 
//If the value of the target value is greater than the middle value, then the next interval will be the upper half. 
//The search process repeats until the middle value is equal to the target value, or the search interval is empty.


//Note:
//Your function should return -1 for target values not in the array. 

//Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

function binarySearch (array, target) {
  
  var min = 0;
  var max = array.length -1

  while (min <= max) {

  var index = Math.floor((min + max) / 2 );
  var currentEl = array[index];
 
    if (currentEl < target) {
      min = index + 1;
    }
    else if (currentEl > target) {
      max = index - 1;
    }
    else {
    return index;
    }
  }
    
 return -1
}
