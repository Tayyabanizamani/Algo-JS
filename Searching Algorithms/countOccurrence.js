// Question: Count how many times a number appears in the array.
function countOccurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([2, 3, 4, 2, 5, 2], 2)); // 3
