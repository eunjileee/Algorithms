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

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
