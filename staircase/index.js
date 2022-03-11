// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(height) {
    let staircase = "";

    for (let i = 1; i <= height; i++) {
        let row = "";
        row += " ".repeat(height - i) + "#".repeat(i) + "\n";
        staircase += row

    }
    return staircase



}
const myHeight = 16
console.log(staircase(myHeight));