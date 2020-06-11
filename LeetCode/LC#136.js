/** 
- Title : Single Number
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-11
- URL : https://leetcode.com/problems/single-number/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNumber = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
