/*
Insertion Sort
Time Complexity:
 - Best: O(n) (already sorted)
 - Average: O(n^2)
 - Worst: O(n^2)
Space Complexity: O(1) (in-place)
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([12, 11, 13, 5, 6]));
