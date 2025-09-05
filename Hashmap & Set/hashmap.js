/*
HashMap (using JavaScript Map)
Time Complexity:
 - Insert: O(1) average
 - Search: O(1) average
 - Delete: O(1) average
*/
let hashMap = new Map();
// Insert
hashMap.set("name", "Tayyaba");
hashMap.set("age", 19);
hashMap.set("city", "Jamshoro");
// Search
console.log(hashMap.get("name")); // Tayyaba
// Update
hashMap.set("age", 20);
// Delete
hashMap.delete("city");
console.log(hashMap); // Map(2) { 'name' => 'Tayyaba', 'age' => 20 }
