//Implementing LinkedList (singly) in psuedoclassical style.

var LinkedList = function (initialValue) {
      if(initialValue === undefined){
        this.tail = null;
        this.head = null;
      }else{
        this.tail = this.makeNode(initialValue);
        this.head = this.tail;
      }
  };
      
      LinkedList.prototype.addToTail = function(value) {
        if(this.tail === null){
           this.tail = this.makeNode(value);
           this.head = this.tail;
        }else {
          if(this.head.next === null){
            this.head.next = this.tail;
          }
          this.tail.next = this.makeNode(value);
          this.tail = this.makeNode(value);
        }
      }
      
      LinkedList.prototype.removeHead = function() {
        if(this.head.next === null){
          this.tail = null;
          this.head = null;
        }else{
          this.head = this.head.next;
        }
      }
      
      LinkedList.prototype.contains = function(value) {
          var node = this.head;
          var flag = true;
          while(flag){
            if(node.value === value){
              return true;
            }
            if(node.next === null){
              flag = false;
            }
            node = node.next;
          }
          return false;
      }
      
      LinkedList.prototype.makeNode = function (value) {
        var node = {
          value: value,
          next: null
        }
        return node;
      }
