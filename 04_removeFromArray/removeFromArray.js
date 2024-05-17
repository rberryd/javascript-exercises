const removeFromArray = function(arr, ...items) {
    let newArr = [];
    for(const element of arr) {
        let count = 0;
        for(const item of items) {
            if(element !== item) {
                count++;
            }
        }

        if(count == items.length) {
            newArr.push(element);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
