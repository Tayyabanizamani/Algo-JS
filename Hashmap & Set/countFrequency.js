/*
Count frequency of each element in array using HashMap
*/
function countFrequency(arr) {
  let freq = new Map();

  for (let num of arr) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }
  return freq;
}
console.log(countFrequency([1, 2, 2, 3, 1, 4, 2]));
// Map(4) { 1 => 2, 2 => 3, 3 => 1, 4 => 1 }
