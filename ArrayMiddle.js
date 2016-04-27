//Given an array of negative/positive integers, return the element in the center position of the array.

//If the array has an even number of elements, return the average of the two middle elements instead.

function middle (numbers) {
  if(numbers.length % 2 !== 0) {
    return numbers[Math.floor(numbers.length/2)];
  }else {
    return (numbers[numbers.length/2] + numbers[numbers.length/2 - 1]) / 2;
  }
}
