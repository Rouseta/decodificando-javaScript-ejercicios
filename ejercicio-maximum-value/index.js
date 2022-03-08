// Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one "5" digit inside the decimal representaion of integer N.
// 268 > 5268
// 670 > 6750
// 0 > 50
// -999 > -5999

const N = -919;

const solution = (num) => {
    let numString = num.toString();
    const isNegative = Math.sign(numString);
    let numArr = [];
    let maxValue = [];
    if (isNegative === 1 || isNegative === 0) {
        numArr = numString.split("");
        numArr.map((eachDigit) => {
            if (parseInt(eachDigit) < 5 && !maxValue.includes(5)) {
                maxValue.push(5, parseInt(eachDigit));
            } else {
                maxValue.push(parseInt(eachDigit));
            }
        });
    } else {
        const beginning = numString.slice(0, 2);
        const ending = numString.slice(2, numString.length);
        numArr.push(beginning, ...ending);
        numArr.map((eachDigit) => {
            if (eachDigit < 0) {
                if (-parseInt(eachDigit) < 5 && !maxValue.includes(5)) {
                    maxValue.push(parseInt(eachDigit), 5);
                } else if (!maxValue.includes(5)) {
                    maxValue.push(-5, -parseInt(eachDigit));
                }
            } else {
                maxValue.push(parseInt(eachDigit));
            }
        });
    }
    const maxValueStr = maxValue.join("");
    return parseInt(maxValueStr);
};
console.log(solution(N));