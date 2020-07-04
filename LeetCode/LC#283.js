/** 
- Title : Move Zeroes
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-09
- URL : https://leetcode.com/problems/move-zeroes/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let moveZeroes = function (nums) {
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      cnt++;
      nums.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < cnt; i++) {
    nums.push(0);
  }
};
