const palindromes = function (string) {

    let cleanString = removePunctuation(string).toLowerCase();
    let middleLength = Math.ceil(cleanString.length / 2);
    console.log(middleLength);

    for (let i = 0, j = cleanString.length - 1; i < middleLength; i++, j--) {
        if (cleanString[i] !== cleanString[j]) {
            return false;
        }
    }
    return true;
};

function removePunctuation(text) {
    var punctuation = /[\.,?!]/g;
    var newText = text.replace(punctuation, "").replace(/\s/g, "");
    return newText;
}

// Do not edit below this line
module.exports = palindromes;
