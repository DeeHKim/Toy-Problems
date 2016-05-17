//Bubble sort is considered the most basic sorting algorithm in Computer Science. 
//It works by starting at the first element of an array and comparing it to the second element:

//If the first element is greater than the second element, it swaps the two.
//It then compares the second to the third, and the third to the fourth, and so on.
//In this way, the largest values ‘bubble’ to the end of the array.
//Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
//Implement a function that takes an array and sorts it using this technique.


function bubbleSort (input) {
  var array = input;
  var holder;
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input.length - 1; j++){
      if(array[j] > array[j+1]){
        holder = array[j+1];
        array[j+1] = array[j];
        array[j] = holder;
      }
    }
  }
  return array;
 }
