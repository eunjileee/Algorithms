/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-07
- URL : https://www.acmicpc.net/problem/2741
*/

/**
 readline 사용 시 '시간 초과'
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
