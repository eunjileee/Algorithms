/** 
- Title : Roman to Integer
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-05
- URL : https://leetcode.com/problems/roman-to-integer/
*/

/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = [];
  let sum = 0;
  let str = s.split(""); //['I','I','I']

  for (let i = 0; i < str.length; i++) {
    arr.push(obj[str[i]]); // [1,1,1]
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      sum = sum + arr[i + 1] - arr[i];
      i++;
    } else {
      sum = sum + arr[i];
    }
  }
  return sum;
};
