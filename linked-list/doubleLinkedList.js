// 双向链表

// 定义节点
function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// 头部插入节点
DoubleLinkedList.prototype.insertHead = function(data) {
  var node = new Node(data);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  this.length++;
};

// 尾部插入节点
DoubleLinkedList.prototype.insertTail = function(data) {
  var node = new Node(data);

  if (this.tail === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }

  this.length++;
};

// 头部删除节点
DoubleLinkedList.prototype.deleteHead = function() {
  if (this.head.next === null) {  // 只有一个节点
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.previous = null;
  }
  
  this.length--;
};

// 尾部删除节点
DoubleLinkedList.prototype.deleteTail = function() {
  var currentNode = this.head;

  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
  } else {
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  
  this.length--;
}

// 转换为数组
DoubleLinkedList.prototype.toArray = function() {
  var array = [],
      current = this.head;
  
  while (current) {
    array.push(current.data);
    current = current.next;
  }

  return array;
};

var doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.insertHead(5);
doubleLinkedList.insertHead(8);
doubleLinkedList.insertTail(20);
doubleLinkedList.insertTail(11);

console.log(doubleLinkedList.toArray());

doubleLinkedList.deleteHead();
console.log(doubleLinkedList.toArray());

doubleLinkedList.deleteTail();
console.log(doubleLinkedList.toArray());
