// Find the first duplicate number in an array.
let arr = [3, 5, 2, 4, 5, 2];
let found = -1;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            found = arr[i];
            break;
        }
    }
    if (found !== -1) break;
}
console.log("First duplicate:", found);
