function permute(nums) {
    let result = [];

    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            backtrack(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
            current.pop(); // backtrack
        }
    }

    backtrack([], nums);
    return result;
}

console.log(permute([1,2,3]));
