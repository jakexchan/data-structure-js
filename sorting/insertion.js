/*
 * 插入排序
 */

var insertionSort = function(array) {
  var i, j;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        array.splice(j, 0, array[i]);
        array.splice(i+1, 1);
      }
    }
  }

  return array;
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", insertionSort(testCase));