const fibonacci = function(n) {

    if (n < 0) {
        return "OOPS";
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    firstNumber = 1;
    secondNumber = 1;

    for (let i = 2; i < n; i++) {
        addTwoNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber= addTwoNumber;
    }

    return addTwoNumber;

    

};

// Do not edit below this line
module.exports = fibonacci;
