const palindromes = function (str) {
    const arr = str.toLowerCase().split("").filter(item => {
        return item.match(/[a-z0-9]/g) ? 1 : 0;
    });

    return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
