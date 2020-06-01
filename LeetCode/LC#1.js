/** 
- Title : Two Sum
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-05-26
- URL : https://leetcode.com/problems/two-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// FIRST SOLUTION
let twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// SECOND SOLUTION
let twoSUm = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (map.has(value)) {
      return [map.get(value), i];
    }
    map.set(nums[i], i);
  }
};
