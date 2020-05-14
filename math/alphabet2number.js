const stringAlphabetUS = "abcdefghijklmnopqrstuvwxyz";
var numberEquivalentArr = [];
let mapAlphabet2Numbers = new Map();
let inWord ="gnua";
let alphabet = "";

/*set the alphabet from input*/
/* TODO make the alphabet consntant*/
function setAlphabet(inputAlphabet) {
    alphabet = inputAlphabet;
};

function translateChar2Number(inputWord) {
    let outputNumbersArray = [];
    let selector = NaN;
    for(let i = 0; i < inputWord.length; i++) {
        selector = alphabet.search(inputWord[i]);
        outputNumbersArray[i] = selector + 1;
        console.log(outputNumbersArray[i]);
    };
    return outputNumbersArray;
};

function howBigAlphabetIs(alphabetIn, wordArr) {
    console.log("alphabetIn.length = ", alphabetIn);
    let maximum = alphabetIn.length;
    console.log("maximum = ", maximum);
    let sizeable = Math.floor(maximum / 10);
    console.log("sizeable = ", sizeable);

    if (sizeable == 0) {
        console.log("smallest alphabet");
    } else if (sizeable == 1) {
        console.log("SMALL alphabet");
    } else if (sizeable == 2) {
        console.log("NORMAL alphabet");
    } else if (sizeable == 3) {
        console.log("big alphabet");
    } else if (sizeable == 4) {
        console.log("bigger alphabet");
    } else if (sizeable == 5) {
        console.log("biggest alphabet");
    } else if (sizeable > 6) {
        console.log("HUGE alphabet");
    } else {
        console.log("error")
    }
};

setAlphabet(stringAlphabetUS);
const outWord = translateChar2Number(inWord);

console.log(outWord); 
howBigAlphabetIs(alphabet, outWord)

