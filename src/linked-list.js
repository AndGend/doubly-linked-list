const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    var newNode = new Node(data);

    if (this.length > 0) {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }

    this.length++;
  }

  head() {
    var headNode = this._head;

    if (headNode == null) {
      return null;
    }

    return headNode.data;
  }


  tail() {
    var tailNode = this._tail;

    if (tailNode == null) {
      return null;
    }

    return tailNode.data;
  }

  at(index) {
    if (index <= this.length && index > 0){
      var node = this._head;
      for (var i=1; i < index; i++) {
        node = node.next;
      }
      return node.data;
    }
    return null;
  }

  insertAt(index, data) {
     if (index <= 0 || index > (this.length + 1)) {
       return;
     }

     if (index == 1 && this.length == 0) {
       this.append(data);
     } else  if (index == (this.length + 1)) {
       this.append(data);
     } else if (index == 1 && this.length > 0) {
         var newNode = new Node(data);
         var node = this._head;
         newNode.next = node;
         node.prev = newNode;
         this.length++;
         this._head = newNode;
     } else {
       var newNode = new Node(data);
       var node = this._head;

       for (var i=1; i < index; i++) {
         node = node.next;
       }
       newNode.prev = node.prev;
       newNode.next = node;
       node.prev.next = newNode;
       node.prev = newNode;

       this.length++;
     }
   }

  isEmpty() {
    return (this.length == 0);
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  deleteAt(index) {
     if (index <= 0 || index > this.length) {
       return;
     }
     var node;
     if (index == 1 && this.length == 1) {
       this.clear();
     } else if (index == 1) {
       node = this._head;
       node.next.prev = null;
       this._head = node.next;
     } else if (this.length == index) {
         var node = this._tail;
         node.prev.next = null;
         this._tail = node.prev;
     } else {
       var node = this._head;
       for (var i=1; i < index; i++) {
         node = node.next;
       }
       node.prev.next = node.next;
       node.next.prev = node.prev;
     }

     this.length--;
     node = null;
   }

  reverse() {}

  indexOf(data) {}

}

module.exports = LinkedList;
