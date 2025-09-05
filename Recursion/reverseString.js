// Q: Write a recursive function to reverse a string.

// Input: "hello"

// Output: "olleh"

function reverseString(str, start, end) {
    if (start >= end) return str;

    // string immutable hai JS me, isliye array banate hain
    let arr = str.split("");
    
    // swap
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // recursion
    return reverseString(arr.join(""), start + 1, end - 1);
}

let str = "hello";
let reversed = reverseString(str, 0, str.length - 1);
console.log("Original:", str);
console.log("Reversed:", reversed);
