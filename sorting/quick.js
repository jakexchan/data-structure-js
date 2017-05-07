/*
 * 快速排序
 */

var quickSort = function(array) {
  var left = [],
      right = [],
      mid = [array[0]];

  if (array.length <= 1) {
    return array;
  }

  for (var i = 1; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(mid, quickSort(right));
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", quickSort(testCase));