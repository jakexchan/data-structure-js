/**
 * 二叉树遍历-非递归算法
 */
const binaryTree = require('./binary-tree');

console.log('二叉树遍历-非递归算法');

var preOrderTraverse = function(tree, callback) {
  var stack = [],
      cur = tree.root,
      popEle;
  
  while(cur || stack.length > 0) {
    if (cur !== null) {
      callback(cur);
      stack.push(cur);
      cur = cur.leftChild;
    } else {
      popEle = stack.pop();
      cur = popEle.rightChild;
    }
  }
}

console.log('非递归-先序遍历')
preOrderTraverse(binaryTree, function(node) {
  console.log(node.data);
});


/**
 * 根据先序和中序重组二叉树
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }

  var root = new TreeNode(pre[0]),
      rootIndex = vin.indexOf(pre[0]);

  var leftVin = vin.slice(0, rootIndex),
      rightVin = vin.slice(rootIndex+1);

  root.left = reConstructBinaryTree(pre.slice(1, leftVin.length+1), leftVin);
  root.right = reConstructBinaryTree(pre.slice(leftVin.length+1), rightVin);

  return root;
}

var tree = reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]);

console.log(tree);