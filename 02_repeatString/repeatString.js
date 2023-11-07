const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    }

    let stringRepeated = "";

    for (let i = 0; i < num; i++) {
        stringRepeated += string;
    }
    
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
