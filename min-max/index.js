
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }
    });
    let min = sortedArr.slice(0, sortedArr.length - 1)
    let max = sortedArr.slice(1, sortedArr.length)

    const minSum = min.reduce((acc, next) => acc + next, 0);
    const maxSum = max.reduce((acc, next) => acc + next, 0)
    return console.log(minSum, maxSum)




}


let myNumbers = [5, 4, 2, 1, 3]
console.log(miniMaxSum(myNumbers))