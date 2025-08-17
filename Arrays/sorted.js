// Check whether the array is sorted in ascending order
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([5, 3, 2, 1]));   // false
