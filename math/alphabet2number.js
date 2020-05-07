const stringAlphabetUS = "abcdefghijklmnopqrstuvwxyz";
const iterateThroughAlphabet = [..."stringAlphabetUS"];
var numberEquivalentArr = [];
let mapAlphabet2Numbers = new Map();
let inWord ="gnu";

/* relationship one to one, is this true? TODO*/
function generateNumbersFromAlpha(stringAlphabetUS, numberEquivalentArr) {
    for (var i = 0; i < stringAlphabetUS.length; i++) {
        numberEquivalentArr.push(i + 1);
        console.log(stringAlphabetUS[i]);
        console.log(numberEquivalentArr[i + 1]);
    };
};

function mapAlphabet2Number(mapAlphabet2Numbers) {
    for (var i = 0; i < stringAlphabetUS.length; i++) {
        mapAlphabet2Numbers.set(numberEquivalentArr[i + 1], stringAlphabetUS.charAt(i));
    };
};

function translateChar2Number(inWord) {
/* TODO */
};

generateNumbersFromAlpha(stringAlphabetUS, numberEquivalentArr);
mapAlphabet2Number(mapAlphabet2Numbers);
/*translateChar2Number(inWord);*/

console.log(stringAlphabetUS.length);
console.log(stringAlphabetUS);
console.log(numberEquivalentArr);
console.log(typeof stringAlphabetUS.length);
console.log(typeof stringAlphabetUS);
console.log(typeof numberEquivalentArr);