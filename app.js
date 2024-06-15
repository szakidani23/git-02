'use strict';

console.log('hello console');

function add(a, b) {
  return a + b;
}

function div(a, b) {
  if (b !== 0) return a / b;
  return 'division by zero is not possible!';
}

let testString = 'jancsika';
testString.includes('j')
  ? console.log('yes it contains j')
  : console.log('no it doesnt contain j');

console.log(add(10, 20));
