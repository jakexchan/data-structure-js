/*
 * Single linked list
 */

// 创建节点
function Node(data) {
  this.data = data;
  this.next = null;
}

// 创建单向链表
function SingleLinkedList() {
  this.head = null;
  this.tail = null;

  this.length = 0;
}

// 头部插入方法
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

// 尾部插入方法
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

// 按照位置插入方法
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

// 删除头部节点方法
SingleLinkedList.prototype.deleteHead = function() {
  this.head = this.head.next;
  this.length--;
  return 'Delete head node';
};

// 删除尾部节点方法
SingleLinkedList.prototype.deleteTail = function() {
  var currentNode = this.head;

  if (currentNode.next === null) {
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

// 根据位置参数删除节点
SingleLinkedList.prototype.deleteAt = function(index) {
  var prevNode = this.head;
  
  if (index > this.length) {
    throw("Over list size");
  }

  for (var i = 0; i < index - 2; i++) {
    prevNode = prevNode.next;
  }

  var currentNode = prevNode.next;

  if (currentNode.next === null) {
    prevNode.next = null;
  } else {
    prevNode.next = prevNode.next.next;
  }

  this.length--;
}

// 转换为数组
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
console.log(singleLinkedList.length);

// console.log(singleLinkedList.deleteAt(3));
// console.log(singleLinkedList.deleteHead());
console.log(singleLinkedList.deleteTail());
console.log(singleLinkedList.toArray());
console.log(singleLinkedList.length);
