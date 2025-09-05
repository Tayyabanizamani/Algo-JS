// Question : Find first non-repeating character in a string
function firstNonRepeatingChar(str) {
  let map = new Map();

  for (let ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch of str) {
    if (map.get(ch) === 1) return ch;
  }

  return null;
}
console.log(firstNonRepeatingChar("aabbcde")); // c
// complexity O(n)