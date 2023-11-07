const sumAll = function(num1, num2) {  

    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 === num2) {
        return num1;
    }

    let bigger = num1;
    let smaller = num2;

    if (num2 > num1) {
        bigger = num2;
        smaller = num1;
    }

    let count = 0;
    for (let i = smaller; i <= bigger; i++) {
        count += i;
    }

    return count;
};

// Do not edit below this line
module.exports = sumAll;
