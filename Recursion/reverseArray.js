// Q: Write a recursive function to reverse an array.

// Input: [1, 2, 3, 4, 5]

// Output: [5, 4, 3, 2, 1]
function reverseArray(arr, start, end) {
    // Base case
    if (start >= end) {
        return;
    }

    // Step 1: swap
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Step 2: recursion
    reverseArray(arr, start + 1, end - 1);
}

let arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);

reverseArray(arr, 0, arr.length - 1);

console.log("Reversed:", arr);
