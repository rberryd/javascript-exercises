const sumAll = function(num1, num2) {
    if(typeof(num1) != 'number' || typeof(num2) != 'number' || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let lowestNum;
    let highestNum;
    let sum = 0;

    if(num1 > num2) {
        lowestNum = num2;
        highestNum = num1;
    } else {
        lowestNum = num1;
        highestNum = num2;
    }

    for(let i = 0; i < highestNum; i++) {
        sum += lowestNum;
        lowestNum++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
