// Question: Find the first index of a target element in a sorted array (duplicates allowed).
function firstOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
console.log(firstOccurrence([2, 4, 4, 4, 6, 8], 4)); // 1
