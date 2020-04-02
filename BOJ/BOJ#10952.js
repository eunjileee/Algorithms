/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-01
- URL : https://www.acmicpc.net/problem/10952
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
  /*
  예시)
  < 입력 >                         < 입력을 받은 line 배열 >
    1 1
    2 3      [ [ '1 1' ], [ '2 3' ], [ '3 4' ] [ '9 8' ] [ '5 2' ] [ '0 0' ] ]
    3 4
    9 8
    5 2
    0 0
  */
}).on("close", function() {
  let num = [];
  for (let i = 0; i < input.length; i++) {
    num.push(input[i].split(" "));
  }

  /*

    <num의 배열>
    [ ['1', '1'], ['2', '3'], ['3', '4'], ['9', '8'], ['5', '2'], ['0', '0'] ]

  */

  /* 배열 안 요소를 인덱스로 접근하여 합한다.*/
  for (let i = 0; i < input.length - 1; i++) {
    num1 = Number(num[i][0]);
    num2 = Number(num[i][1]);

    console.log(num1 + num2);
  }

  process.exit();
});
