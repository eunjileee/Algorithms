/** 
- Title : Palindrome Number
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-06
- URL : https://leetcode.com/problems/palindrome-number/
*/

/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindrome = function (x) {
  let str = String(x);
  let reverseStr = str.split("").reverse().join().replace(/,/gi, "");

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
};
