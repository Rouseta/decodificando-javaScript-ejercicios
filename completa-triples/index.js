// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

function compareTripletes(a, b) {
    let resultingPoints = [0, 0];
    for (let i = 0; i < alicePoints.length; i++) {

        if (alicePoints[i] < bobPoints[i]) {
            resultingPoints[1] = resultingPoints[1] + 1
        } else if (alicePoints[i] > bobPoints[i]) {
            resultingPoints[0] = resultingPoints[0] + 1
        }




    }


    return resultingPoints


}

const alicePoints = [1, 2, 3]
const bobPoints = [3, 2, 1]
console.log(compareTripletes(alicePoints, bobPoints));                    