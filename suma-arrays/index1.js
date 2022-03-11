const myNumber = [1, 2, 3, 4, 5, 6]
function simpleArraySum(array) {
    return array.reduce((acc, number) => acc + number, 0);



}
console.log(simpleArraySum(myNumber));