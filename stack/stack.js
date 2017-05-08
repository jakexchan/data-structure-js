/*
 * 栈
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.top = null;
  this.length = 0;
};

// 入栈
Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.next = this.top;
  this.top = node;
  this.length++;
};

// 出栈
Stack.prototype.pop = function() {
  if (!this.top) {
    return false;
  } else {
    this.top = this.top.next;
    this.length--;
  }
};

// 获得栈顶元素
Stack.prototype.peek = function() {
  if (this.top) {
    return this.top.data;
  } else {
    return null;
  }
};

// 清空栈
Stack.prototype.clear = function() {
  this.top = null;
  this.length = 0;
};

// 打印栈
Stack.prototype.print = function() {
  var cur = this.top;
  
  if (!this.top) {
    console.log("Stack is empty");
  }

  while (cur) {
    console.log(cur.data);
    cur = cur.next;
  }
};

var stack = new Stack();

stack.push(2);
stack.push(5);
stack.push(3);

console.log("Stack length: ", stack.length);
stack.print();

console.log("Stack top element: ", stack.peek());

stack.pop();
console.log("Stack length: ", stack.length);
stack.print();

stack.clear();
stack.print();
console.log("Stack length: ", stack.length);