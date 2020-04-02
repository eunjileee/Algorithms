/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-02
- URL : https://www.acmicpc.net/problem/11022
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
  < 입력 > 
    5                  < 입력을 받은 line 배열 >
    1 1
    2 3      [ 5, [ '1 1' ], [ '2 3' ], [ '3 4' ], [ '9 8' ], [ '5 2' ] ]
    3 4
    9 8
    5 2
  */
}).on("close", function() {
  let count = Number(input[0]); // 테스트 케이스 개수
  let num = [];

  for (let i = 1; i <= count; i++) {
    num.push(input[i].split(" "));
  }

  /*
    <num의 배열>

    [ ['1', '1'], ['2', '3'], ['3', '4'], ['9', '8'], ['5', '2'] ]

  */

  /* 배열 안 요소를 인덱스로 접근하여 합한다.*/
  for (let i = 0; i < count; i++) {
    num1 = Number(num[i][0]);
    num2 = Number(num[i][1]);

    console.log(`Case #${i + 1}: ${num1} + ${num2} = ${num1 + num2}`);
  }

  process.exit();
});
