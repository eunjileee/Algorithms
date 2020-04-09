/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-09
- URL : https://www.acmicpc.net/problem/2739
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
  let num = parseInt(input); //2

  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }

  process.exit();
});
