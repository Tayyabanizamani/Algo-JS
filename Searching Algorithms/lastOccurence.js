// Question: Find the last index of a target element in a sorted array (duplicates allowed).
function lastOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; 
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
console.log(lastOccurrence([2, 4, 4, 4, 6, 8], 4)); // 3
