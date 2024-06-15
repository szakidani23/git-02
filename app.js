'use strict';

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns return a+b as a result
 */

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
// Subtraction function
function sub(a, b) {
  return a - b;
}
// Multiple
function mul(a, b) {
  return a * b;
}
console.log(add(10, 20));
