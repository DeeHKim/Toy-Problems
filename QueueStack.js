//Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.

var Stack = function() {
  var storage = [];

  this.push = function(value){
  storage.push(value);
  };

  this.pop = function(){
  return storage.pop();
  };

  this.size = function(){
  return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
  inbox.push(value);
  };

  this.dequeue = function(){
  var result = null;
  while(inbox.size() > 0){
    outbox.push(inbox.pop());
  }
  result = outbox.pop();
  while(outbox.size() > 0){
    inbox.push(outbox.pop());
  }
  return result;
  };

  this.size = function(){
  return inbox.size();
  };
};
