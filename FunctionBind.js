//Implement the function ‘bind’, which accepts a function and a context as arguments. //
//The context argument should override an existing context that the function is defined in. 
//Your bind function should return the passed in function.


var bind = function(func, context){
 var args = Array.prototype.slice.call(arguments, 2);
 var fn = func;
  return function(){
   args2 = args.concat(Array.prototype.slice.call(arguments));
     return fn.apply(context, args2);
  };
}; 

Function.prototype.bind = function(context) {
    var array1 = Array.prototype.slice.call(arguments, 1);
    var func = this;
  return function(){
     args2 = array1.concat(Array.prototype.slice.call(arguments));
     return func.apply(context, args2);
  };
};
