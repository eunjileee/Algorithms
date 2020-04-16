/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-16
- URL : https://www.acmicpc.net/problem/8393
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  /*
  < input >
  ["3"]

  */
}).on("close", function () {
  let num = parseInt(input[0]); //3
  let count = 0;

  for (let i = 1; i <= num; i++) {
    count += i;
  }
  console.log(count);

  process.exit();
});
