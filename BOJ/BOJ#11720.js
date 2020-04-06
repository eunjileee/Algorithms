/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-06
- URL : https://www.acmicpc.net/problem/11720
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let sum = 0;

  for (let num of input[1]) {
    sum += Number(num);
  }
  console.log(sum);
  process.exit();
});
