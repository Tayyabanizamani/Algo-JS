// Question: Given an array, search for a target element using Linear Search.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return index if found
    }
  }
  return -1; // not found
}

console.log(linearSearch([5, 3, 8, 2, 7], 8)); // 2
console.log(linearSearch([5, 3, 8, 2, 7], 9)); // -1
