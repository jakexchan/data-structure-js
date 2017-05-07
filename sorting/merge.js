/*
 * 归并排序
 */

var mergeSort = function(array) {
  var merge = function(left, right) {
    var result = [];

    while(left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    
    return result.concat(left.concat(right));
  }

  var length = array.length,
      mid = null;

  if (length < 2) {
    return array;
  } else {
    mid = length / 2;
  }

  return merge(mergeSort(array.slice(0, parseInt(mid))), mergeSort(array.slice(parseInt(mid))));
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", mergeSort(testCase));