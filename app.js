'use strict';

console.log('hello console');

function add(a, b) {
  return a + b;
}

function div(a, b) {
  if (b !== 0) return a / b;
  return 'division by zero is not possible!';
}

console.log(add(10, 20));
