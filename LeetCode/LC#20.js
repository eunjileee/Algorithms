/** 
- Title : Valid Parentheses
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-03
- URL : https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function (s) {
  if (s === null || s.length <= 0) return true;
  var cArr = s.split("");
  var stack = [];
  for (var c of cArr) {
    if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (c === "(") stack.push(")");
    else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};
