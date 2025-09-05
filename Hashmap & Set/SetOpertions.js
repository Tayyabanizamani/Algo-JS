/*
Perform Union, Intersection, and Difference using Set
*/
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}
function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}
function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)));
}
let A = new Set([1, 2, 3, 4]);
let B = new Set([3, 4, 5, 6]);
console.log(union(A, B));        // {1,2,3,4,5,6}
console.log(intersection(A, B)); // {3,4}
console.log(difference(A, B));   // {1,2}
