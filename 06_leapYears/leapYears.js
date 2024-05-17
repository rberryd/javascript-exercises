const leapYears = function(year) {
    if(year.toString().includes("00")) {
        return year % 400 == 0;
    } else {
        return year % 4 == 0;
    }
};

// Do not edit below this line
module.exports = leapYears;
