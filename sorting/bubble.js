/*
 * 冒泡排序
 */

var bubbleSort = function(array) {
  var length = array.length,
      i = null,
      j = null,
      temp = null;
  
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j+1]) {
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }

    }
  }

  return array;
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", bubbleSort(testCase));