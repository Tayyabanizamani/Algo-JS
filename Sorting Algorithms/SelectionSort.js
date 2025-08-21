/*
Selection Sort
Time Complexity:
 - Best: O(n^2)
 - Average: O(n^2)
 - Worst: O(n^2)
Space Complexity: O(1) (in-place)
*/

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));
