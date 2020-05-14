const stringAlphabetUS = "abcdefghijklmnopqrstuvwxyz";
var numberEquivalentArr = [];
let mapAlphabet2Numbers = new Map();
let inWord ="gnu";
let alphabet = "";

/*set the alphabet from input*/
/* TODO make the alphabet consntant*/
function setAlphabet(inputAlphabet) {
    alphabet = inputAlphabet;
};

function translateChar2Number(inputWord) {
    setAlphabet(stringAlphabetUS);
    let outputNumbersArray = [];
    let selector = NaN;
    for(let i = 0; i < inputWord.length; i++) {
        selector = alphabet.search(inputWord[i]);
        outputNumbersArray[i] = selector + 1;
        console.log(outputNumbersArray[i]);
    };

    return outputNumbersArray;
};


const outWord = translateChar2Number(inWord);

console.log(outWord);
