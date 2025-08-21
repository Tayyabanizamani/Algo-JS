/*
Shell Sort (improvement of Insertion Sort)
Time Complexity:
 - Best: O(n log n)
 - Average: depends on gap sequence (usually O(n^(3/2)))
 - Worst: O(n^2)
Space Complexity: O(1)
*/
function shellSort(arr) {
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}
console.log(shellSort([12, 34, 54, 2, 3]));
