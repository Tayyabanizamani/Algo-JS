/*
Counting Sort (works for non-negative integers)
Time Complexity:
 - Best: O(n + k)
 - Average: O(n + k)
 - Worst: O(n + k)   (k = range of numbers)
Space Complexity: O(n + k)
*/

function countingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;

  let count = new Array(range).fill(0);
  let output = new Array(arr.length).fill(0);

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Prefix sum
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
