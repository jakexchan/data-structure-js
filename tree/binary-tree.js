/*
 * 树
 */
function Node(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}

function BinaryTree() {
  this.root = null;
};

// 输出二叉树
BinaryTree.prototype.print = function() {
  console.log(this.root);
}

// 判断二叉树是否为空
BinaryTree.prototype.isBinaryTreeEmpty = function() {
  if (this.root) {
    return false;
  } else {
    return true;
  }
};


var treeDepth = function(node) {
  var i, j;

  if (node === null) {
    return 0;
  }

  if (node.leftChild) {
    i = treeDepth(node.leftChild);
  } else {
    i = 0;
  }

  if (node.rightChild) {
    j = treeDepth(node.rightChild);
  } else {
    j = 0;
  }

  return i > j ? i+1 : j+1;
};

// 二叉树的深度
BinaryTree.prototype.binaryTreeDepth = function() {
  return treeDepth(this.root);
}


var insertChild = function(node, childName, newNode) {
  if (!node[childName]) {
    node[childName] = newNode;
  } else {
    insert(node[childName], newNode);
  }
};

var insert = function(node, newNode) {
  if (newNode.data < node.data) {
    insertChild(node, 'leftChild', newNode);
  } else {
    insertChild(node, 'rightChild', newNode);
  }
};

// 插入节点
BinaryTree.prototype.insertNode = function(data) {
  var node = new Node(data);

  if (!this.root) {
    this.root = node;
  } else {
    insert(this.root, node);
  }
};


var checkCallback = function(callback) {
  if (!callback || typeof callback !== 'function') {
    throw ('Callback function error.');
  }
};

var preOrderTraverseNode = function(node, callback) {
  checkCallback(callback);
  if (node) {
    callback(node);
    preOrderTraverseNode(node.leftChild, callback);
    preOrderTraverseNode(node.rightChild, callback);
  }
};

// 先序遍历: 先访问根节点 > 左子树 > 右子树
BinaryTree.prototype.preOrderTraverse = function(callback) {
  preOrderTraverseNode(this.root, callback);
};


var inOrderTraverseNode = function(node, callback) {
  checkCallback(callback);

  if (node) {
    inOrderTraverseNode(node.leftChild, callback);
    callback(node);
    inOrderTraverseNode(node.rightChild, callback);
  }
};

// 中序遍历: 先访问左子树 > 根节点 > 右子树
BinaryTree.prototype.inOrderTraverse = function(callback) {
  inOrderTraverseNode(this.root, callback);
};


var postOrderTraverseNode = function(node, callback) {
  checkCallback(callback);

  if (node) {
    postOrderTraverseNode(node.leftChild, callback);
    postOrderTraverseNode(node.rightChild, callback);
    callback(node);
  }
};

// 后序遍历: 先访问左子树 > 右子树 > 根节点
BinaryTree.prototype.postOrderTraverse = function(callback) {
  postOrderTraverseNode(this.root, callback);
};


// 层次遍历: 同深度节点依次遍历(二叉树广搜算法)
BinaryTree.prototype.levelOrderTraverse = function(callback) {
  var queue = [],
      e = null;

  checkCallback(callback);

  if (this.root) {
    queue.push(this.root);

    while(queue.length > 0) {
      e = queue.shift();
      callback(e);
      
      if (e.leftChild) {
        queue.push(e.leftChild);
      }

      if (e.rightChild) {
        queue.push(e.rightChild);
      }
    }
  }
};

var binaryTree = new BinaryTree();

binaryTree.insertNode(10);
binaryTree.insertNode(8);
binaryTree.insertNode(9);
binaryTree.insertNode(11);
binaryTree.insertNode(12);
binaryTree.insertNode(13);
binaryTree.insertNode(2);

console.log('二叉树深度: ', binaryTree.binaryTreeDepth());
// binaryTree.print();

console.log('先序遍历: ');
binaryTree.preOrderTraverse(function(node) {
  console.log(node.data);
});

console.log('中序遍历: ');
binaryTree.inOrderTraverse(function(node) {
  console.log(node.data);
});

console.log('后序遍历: ');
binaryTree.postOrderTraverse(function(node) {
  console.log(node.data);
});

console.log('层次遍历: ');
binaryTree.levelOrderTraverse(function(node) {
  console.log(node.data);
});