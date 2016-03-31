//Implement a function that finds the longest palindrome in a given string. 
//For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”.
//Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ 
//(including whitespace on each side of dad).


function longestPalindrome (string) {
  var arr = string.split('');
  var result = '';
  
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      var str = arr.slice(i, j+1).join('');
      if(str === str.split('').reverse().join('')) {
        if(str.length > result.length) {
          result = str;
        }
      }
    }
  }
  
  return result;
}
