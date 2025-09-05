// Find intersection of two arrays

function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let result = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }

  return result;
}
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4])); // [2,3]
// complexity O(n+m)