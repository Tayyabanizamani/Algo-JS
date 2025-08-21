// Question: Given a rotated sorted array, search for a target element.
function searchRotated(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    // Left side sorted
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right side sorted
    else {
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
