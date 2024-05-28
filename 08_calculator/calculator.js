const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if(arr == []) {
    return 0;
  }

  let sum = 0;
	for(const num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  if(arr == []) {
    return 0;
  }

  let total = 1;
  for(const num of arr) {
    total *= num;
  }
  return total;
};

const power = function(num,pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	total = 1;

  for(let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
