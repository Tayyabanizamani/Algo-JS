function combinationSum(candidates, target) {
    let result = [];

    function backtrack(start, current, total) {
        if (total === target) {
            result.push([...current]);
            return;
        }
        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, total + candidates[i]); // can reuse same number
            current.pop(); // backtrack
        }
    }

    backtrack(0, [], 0);
    return result;
}
console.log(combinationSum([2,3,6,7], 7));
