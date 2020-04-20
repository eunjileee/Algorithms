/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-20
- URL : https://www.acmicpc.net/problem/10818
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
  예시)
  < 입력 >                     <     input      >
    5	                    [ '5', [ '20 10 35 30 7' ]]
    20 10 35 30 7
  */
}).on("close", function () {
  let numbers = String(input[1]).split(" ");

  /*
        < numbers 배열 >
  [ '20', '10', '35', '7' ]
  */

  let max = Math.max.apply(null, numbers);
  let min = Math.min.apply(null, numbers);
  console.log(max, min);

  process.exit();
});
