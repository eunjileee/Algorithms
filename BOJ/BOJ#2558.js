/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-03-30
- URL : https://www.acmicpc.net/problem/2558
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  console.log(parseInt(input[0]) + parseInt(input[1]));

  process.exit();
});
