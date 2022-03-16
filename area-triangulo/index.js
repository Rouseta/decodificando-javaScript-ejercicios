// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
'use strict';
let side1 = 5
let side2 = 6
let side3 = 7
function areaTriangle() {
    const surf = (side1 + side3 + side3) / 2

    const area = Math.sqrt(surf * ((surf - side1) * (surf - side2) * (surf - side3)));
    return area

}
console.log(areaTriangle())