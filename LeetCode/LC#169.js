/** 
- Title : Majority Element
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-04
- URL : https://leetcode.com/problems/majority-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let majorityElement = function (nums) {
  let majority = nums.length / 2; //과반수

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }

    if (count > majority) {
      return nums[i];
    }
  }
};
