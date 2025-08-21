
/*
Bubble Sort
Time Complexity:
 - Best: O(n) (already sorted)
 - Average: O(n^2)
 - Worst: O(n^2)
Space Complexity: O(1) (in-place)
*/

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
