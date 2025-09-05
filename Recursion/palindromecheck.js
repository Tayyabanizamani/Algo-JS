// Q: Write a recursive function to check whether a given string is a palindrome or not.

// Input 1: "madam"

// Output 1: true ✅ (because it reads same forward & backward)

// Input 2: "hello"

// Output 2: false ❌

function isPalindrome(str, start, end) {
    // Base case
    if (start >= end) {
        return true;
    }

    // Check first & last character
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursive call
    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("madam", 0, "madam".length - 1)); // true
console.log(isPalindrome("hello", 0, "hello".length - 1)); // false
