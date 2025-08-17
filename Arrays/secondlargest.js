// Find the second largest element in the array.
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
