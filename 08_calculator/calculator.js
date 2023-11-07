const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sumTotal = 0;
  array.forEach(value => sumTotal += value);
  return sumTotal;
};

const multiply = function(array) {
  let multiplyTotal = 1;
  array.forEach(value => multiplyTotal *= value);
  return multiplyTotal;
};

const power = function(base, power) {
  return base ** power;
};

const factorial = function(factor) {

  if (factor === 1 || factor === 0) {
    return 1;
  }

  return factor * factorial(factor - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
