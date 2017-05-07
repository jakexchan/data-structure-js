/*
 * 堆排序
 */

var heapSort = function(array) {
  var length = array.length,
      i;

  var swap = function(fatherIndex, sonIndex) {
    var temp = array[fatherIndex];
    array[fatherIndex] = array[sonIndex];
    array[sonIndex] = temp;
  };

  var maxHeapify = function(father, len) {
    var son = father * 2 + 1,
        largest = father;
    
    if (son >= len) {
      return;
    }

    if (son + 1 < len && array[son + 1] > array[son]) {
      son++;
    }

    if (array[largest] <= array[son]) {
      swap(largest, son);
      maxHeapify(son, len);;
    }
  };

  for (i = Math.floor(length/2) - 1; i >= 0; i--) {
    maxHeapify(i, length);
  }

  for (i = length - 1; i > 0; i--) {
    swap(0, i);
    maxHeapify(0, i);
  }

  return array;
};

var testCase = [2, 10, 3, 5, 9, 1, 8, 4, 6, 7];

console.log("Before sorting: ", testCase);
console.log("After sorting: ", heapSort(testCase));