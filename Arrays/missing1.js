// Array contains numbers from 1 to n but one number is missing. Find it.
let arr = [1, 2, 3, 5]; // missing 4
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Missing number:", total - sum);
