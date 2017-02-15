/*
 * Single linked list
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function SingleLinkedList() {
  this.head = null;
  this.tail = null;

  this.length = 0;
}

SingleLinkedList.prototype.insertHead = function(data) {
  var node = new Node(data);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  this.length++;
};

SingleLinkedList.prototype.insertTail = function(data) {
  var node = new Node(data);

  if (this.tail === null) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.length++;
};

SingleLinkedList.prototype.insertAt = function(index, data) {
  var current = this.head;

  for (var i = 0; i < index - 1; i++) {
    current = current.next;
  }

  var nextNode = current.next;
  var node = new Node(data);

  node.next = nextNode;
  current.next = node;
  this.length++;
};

SingleLinkedList.prototype.toArray = function() {
  var array = [],
      current = this.head;
  
  while (current) {
    array.push(current.data);
    current = current.next;
  }

  return array;
};


var singleLinkedList = new SingleLinkedList();

singleLinkedList.insertHead(10);
singleLinkedList.insertHead(100);

singleLinkedList.insertTail(1000);

singleLinkedList.insertAt(1, 111);

console.log(singleLinkedList.toArray());
console.log(singleLinkedList.length)
