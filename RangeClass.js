
/* Build a class to represent a range of numbers that has:

a beginning index
an end index (optional). If there is no end index, the range should include only the passed-in start value.
a ‘step’ (optional)
The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.

You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.

The range should have a constructor that accepts these arguments in this order:

begining index
end index
step interval
It should also support the following utility functions:

size(): return the number of items represented by the range
each(callback(index)): iterate over the range, passing each value to a callback function
includes(index): return whether or not the range includes the passed value
You should also be aware of the following caveats:

Should return null if we are given no ‘start’ value.
Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.
*/


var Range = function(start, end, step) {
  this.start = start;
  this.end = end;
  if(arguments.length === 3){
  this.step = step;
  }else{
  this.step = 1;
  }
};

Range.prototype.size = function () {
  if(!this.end){
    return 1;
  }
  return Math.ceil((Math.abs(this.start - this.end) + 1) / this.step);
};

Range.prototype.each = function (callback) {
  if(this.end === undefined){
    callback(this.start);
  }
  if(this.start < this.end && this.step > -1){
    for(var i = this.start; i <= this.end; i+=this.step){
      callback(i);
    }
  }
  if(this.start > this.end && this.step < 0){
    for(var i = this.start; i >= this.end; i+=this.step){
      callback(i);
    }
  }
  if(this.start > this.end && this.step === 1){
    for(var i = this.start; i >= this.end; i--){
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  var ident = false;
  this.each(function(num){
    if(num === val){
      ident = true;
  }})
  return ident;
};

