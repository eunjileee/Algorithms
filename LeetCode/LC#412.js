/** 
- Title : Fizz Buzz
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-07
- URL : https://leetcode.com/problems/fizz-buzz/
*/

/**
 * @param {number} n
 * @return {string[]}
 */

let fizzBuzz = function (n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(`${i}`);
    }
  }
  return arr;
};
