//write a recursive function to find the nth Fibonacci number.
function fibonacci(n) {
    //base case
    if(n===0) return 0;
    if(n===1) return 1;
    //recursive call
    return fibonacci (n-1)+ fibonacci(n-2);
}

console.log(fibonacci(5))
console.log(fibonacci(8))