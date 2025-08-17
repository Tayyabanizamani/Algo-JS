// Anagram Check
// 👉 Two strings are anagram check 
// if they have same characters (e.g., "listen" and "silent").
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
