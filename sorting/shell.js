/*
 * 希尔排序
 */

var shellSort = function(array) {
  var gap = Math.floor(array.length/2),
      index,
      temp,
      i;
  
  while(gap > 0) {
    for (i = gap; i < array.length; i++) {
      index = i - gap;
      temp = array[i];

      while(index >= 0 && array[index] > temp) {
        array[index+gap] = array[index];
        index -= gap;
      }

      array[index+gap] = temp;
    }

    gap = Math.floor(gap/2);
  }

  return array;
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", shellSort(testCase));