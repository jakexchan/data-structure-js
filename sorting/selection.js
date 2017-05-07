/*
 * 选择排序
 */

var selectionSort = function(array) {
  var i, j, min, temp;

  for (i = 0; i < array.length; i++) {
    min = i;
    for (j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", selectionSort(testCase));