//Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

//Iguanas are able to mate at the age of one month so that at the end of its second
//month a female can produce another pair of iguanas.

//Suppose that our iguanas never die and that the female always produces one new pair 
//(one male, one female) every month from the second month on.

//How many pairs of iguanas will there be after n months?

nthFibonacci = function(n) { 
  var result = 1;
  var holder = 1;
  var holder2;
  if(n === 0){
    return 0;
  }
  if(n === 1){
    return 1;
  }
  for(var i = 3; i <= n; i++){
      holder2 = result; 
      result = result + holder;
      holder = holder2;
    }
  return result;
};

