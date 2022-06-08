/*
Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line ad follows:

if i is a multiple of both 3 and 5, print FizzBuzz.
-if i is a multiple of 3, but not 5, print Fizz.
-if i is a multiple of 5, but not 3, print Buzz.
-if i is not a multiple of 3 or 5, print the value of i.
FUNCTION DESCRIPTION
fizzBuzz has the following parameter(s): int n: upper limit of values to test (inclusive)
Returns: NONE
Prints:
The function must print the appropriate response for each value i in the set {1, 2, ..., n} in ascending order, each on a separate line.
CONSTRAINTS 0< n < 2 x 10^5

INPUT FORMAT FOR CUSTOM TESTING
Input from stdin will be processed as follows and passed to the function.
The single integer n, the limit of the range to test: [1,2, ...,n].
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function fizzBuzz(n) {
  for(n=1; n<=15; ++n)  {// Write your code here
  if (n % 15 === 0) {
    console.log("FizzBuzz")}
  else if (n % 3 === 0) {
    console.log("Fizz")}
  else if (n % 5 === 0) {
    console.log("Buzz")}
  else {
    console.log(n)}

}
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  fizzBuzz(n);
  }

