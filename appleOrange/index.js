//Enunciado: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true



function countApplesAndOranges(startingPoint,
    endingPoint,
    appleTree,
    orangeTree,
    applesDistances,
    orangesDistances,
) {
    let numApples = 0;
    let numOranges = 0
    for (let i = 0; i < applesDistances.length; i++) {
        const distanceFromTree = appleTree + applesDistances[i];
        console.log(distanceFromTree);
        if (distanceFromTree >= startingPoint && distanceFromTree <= endingPoint) {
            numApples++;

        }

    }
    for (let i = 0; i < orangesDistances.length; i++) {
        const distanceFromTree = orangeTree + orangesDistances[i];
        console.log(distanceFromTree);
        if (distanceFromTree >= startingPoint && distanceFromTree <= endingPoint) {
            numOranges++;

        }

    }

    return console.log(numApples + "\n" + numOranges)



}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);