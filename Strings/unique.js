//Check if String has All Unique Characters
function isUnique(str) {
    let seen = new Set();
    for (let char of str) {
        if (seen.has(char)) return false;
        seen.add(char);
    }
    return true;
}

console.log(isUnique("abcdef")); // true
console.log(isUnique("hello"));  // false
