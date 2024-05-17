const convertToCelsius = function(temp) {
  let num = (temp - 32) * (5/9);

  if(num % 1 != 0) {
    return parseFloat(num.toFixed(1));
  }

  return num;
};

const convertToFahrenheit = function(temp) {
  let num = temp * 1.8 + 32;
  
  if(num % 1 != 0) {
    return parseFloat(num.toFixed(1));
  }

  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
