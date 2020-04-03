/** 
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-04-03
- URL : https://www.acmicpc.net/problem/11719
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

      Hello                                      <input>
                    
   Baekjoon                 [ '    Hello', [' '], ['Baekjoon'], ['   Online Judge    '] ]
      Online Judge                 

  */
}).on("close", function() {
  for (let i = 0; i < input.length; i++) {
    console.log(String(input[i]));
  }

  process.exit();
});
