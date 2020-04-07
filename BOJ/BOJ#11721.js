/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-06
- URL : https://www.acmicpc.net/problem/11721
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
  let res = String(input).split("");

  for (let i of res) {
    console.log(res.splice(0, 10).join(""));
  }

  process.exit();
});
