// Given a decimal number N between 1 and 4999, find its corresponding Roman numeral.
// Roman numerals are formed by the combination of these letters:
// I=1
// V=5
// X=10
// L=50
// C=100
// D=500
// M=1000
// Rules to combine letters:
// A letter repeats its value that many times (XXX = 30, CC = 200, etc.). A letter can only be repeated three times (except M).
// If one or more letters are placed after another letter of greater value, add that amount (VI = 6 (5+1)).
// If a letter is placed before another letter of greater value, subtract that amount (IV = 4(5-1)).
// Sample Input 0
// 7
// Sample Output 0
// VII
// Explanation 0
// The only way to obtain 7 is summing 5 (V) and 2 (II).
// Sample Input 1
// 139
// Sample Output 1
// CXXXIX

const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 900,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

let romanNumber = "";

function processNumber(num) {
    if (num === 0) {
        return romanNumber;
    } else {
        for (const key in romanNumerals) {
            let rest = num - romanNumerals[key];
            if (rest === 0) {
                romanNumber += key;
                return romanNumber;
            } else if (rest > 0) {
                romanNumber += key;
                return processNumber(rest);
            }
        }
    }
    return romanNumber
}

const num1 = 7;
const num2 = 139;

// console.log(processNumber(num1));
console.log(processNumber(num2));