// Count Words in a Sentence
function countWords(sentence) {
    let trimmed = sentence.trim();  
    let words = trimmed.split(" ");  
    let cleanWords = [];
    for (let w of words) {
        if (w !== "") {
            cleanWords.push(w);
        }
    }
    return cleanWords.length;
}

console.log(countWords("   I   love  coding   ")); 
// 3
