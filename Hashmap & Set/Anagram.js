// check if two strings are anagram
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = new Map();

  for (let ch of str1) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch of str2) {
    if (!map.has(ch)) return false;
    map.set(ch, map.get(ch) - 1);
    if (map.get(ch) === 0) map.delete(ch);
  }

  return map.size === 0;
}
console.log(isAnagram("listen", "silent")); // true
//complexity O(n)
