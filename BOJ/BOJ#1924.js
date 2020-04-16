/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-16
- URL : https://www.acmicpc.net/problem/1924
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
  ["1 1"] //1월 1일

  */
}).on("close", function () {
  let res = String(input).split(" "); // res = ["1", "1"]
  let result = "";

  if (Number(res[0]) === 1) {
    result = new Date(2006, 12, Number(res[1]));
  } else {
    result = new Date(2006, Number(res[0]) - 1, Number(res[1]));
  }

  let date = result.getDate(); //요일 가져오기 (숫자)

  switch (date) {
    case 0:
      console.log("SUN");
      break;
    case 1:
      console.log("MON");
      break;
    case 2:
      console.log("TUE");
      break;
    case 3:
      console.log("WED");
      break;
    case 4:
      console.log("THU");
      break;
    case 5:
      console.log("FRI");
      break;
    case 6:
      console.log("SAT");
      break;
    default:
      console.log("error");
  }

  process.exit();
});
