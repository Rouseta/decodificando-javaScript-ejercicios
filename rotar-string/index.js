'use strict';
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

const string = "w3resource";
const newString = string.split('')



function rotateString() {
    let letter = newString.pop()

    let newWord = newString.unshift(letter)
    let theWord = newString.join('');
    return theWord





}
console.log(rotateString())






