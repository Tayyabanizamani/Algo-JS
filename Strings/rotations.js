// Check if Two Strings are Rotations
function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}

console.log(isRotation("abcde", "deabc")); // true
console.log(isRotation("hello", "loleh")); // false
