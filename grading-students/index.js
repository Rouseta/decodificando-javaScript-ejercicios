// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate
// Input Format

// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, .

function gradingStudents(grades) {
    let roundedGrade = [];
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        if (grade < 38) {
            roundedGrade.push(grade);
        }
        else {
            let nextMultiple5 = Math.ceil(grade / 5) * 5;
            let difference = nextMultiple5 - grade;
            if (difference < 3) {
                roundedGrade.push(nextMultiple5);
            } else {
                roundedGrade.push(grade)
            }


        }
    }
    return roundedGrade

}

const grade1 = [73, 63, 38, 33];


console.log(gradingStudents(grade1));