/*
 * 队列
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.front = null;
  this.rear = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);
  
  if(!this.rear) {
    this.front = node;
    this.rear = node;
  }

  this.rear.next = node;
  this.rear = node;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (!this.front) {
    console.log("Queue is empty.");
  }

  var e = this.front.data;
  this.front = this.front.next;

  return e;
};

Queue.prototype.print = function() {
  var cur = this.front;

  if (!this.front) {
    console.log("Queue is empty.");
  }

  while (cur) {
    console.log(cur.data);
    cur = cur.next;
  }
};

var queue = new Queue();

queue.enqueue("hello");
queue.enqueue("world");

queue.print();

console.log("Dequeue: ", queue.dequeue());
queue.print();

queue.enqueue(100);
queue.print();