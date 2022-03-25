//Enunciado: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function kangaroo(startingPointA, jumpDistanceA, startingPointB, jumpDistanceB) {


    let newPositionA = startingPointA;
    let newPositionB = startingPointB;
    for (let i = 0; i <= 10000; i++) {
        newPositionA += jumpDistanceA
        newPositionB += jumpDistanceB
        if (newPositionA === newPositionB) {
            return "Yes"
        }

    }

    return "No"


}
console.log(kangaroo(0, 2, 5, 3))

