// Array has numbers from 1 to n with one missing, find the missing number.
function findMissing(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return total - sum;
}

console.log(findMissing([1, 2, 4, 5, 6], 6));
// 3
