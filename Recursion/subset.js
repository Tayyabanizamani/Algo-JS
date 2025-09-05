function subsets(nums) {
    let result = [];

    function backtrack(start, current) {
        // copy current subset
        result.push([...current]);

        // explore further elements
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop(); // backtrack
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([1,2,3]));
