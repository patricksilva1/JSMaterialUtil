/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Level - Easy
// 1. Two Sum
// Runtime: 78 ms - Beats 85.75% / Memory: 43.5 MB - Beats 20.8% 
var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};