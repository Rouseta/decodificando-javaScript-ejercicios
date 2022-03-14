// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45
function timeConversion(stringTime) {
    const format = stringTime[stringTime.length - 2] + stringTime[stringTime.length - 1]
    const hours = stringTime[0] + stringTime[1]
    const minutes = stringTime[3] + stringTime[4]
    const seconds = stringTime[6] + stringTime[7]
    let resultingHours = ""
    //
    if (format === "AM") {

        if (hours == "12" && minutes == "00" && seconds == "00") {
            resultingHours = "00:00:00"
        }

        else if (hours == "12" && minutes >= "01" && minutes <= "59") {
            resultingHours = "00:" + minutes + ":" + seconds
            //PM
        } else {
            resultingHours = hours + ":" + minutes + ":" + seconds
        }
    }
    else {
        if (hours == "12" && minutes == "00" && seconds == "00") {
            resultingHours = "24:00:00"
        }
        else if (hours == "12" && minutes >= "01" && minutes <= "59") {
            resultingHours = hours + ":" + minutes + ":" + seconds
        } else if (hours >= 01) {
            resultingHours = parseInt(hours) + 12 + ":" + minutes + ":" + seconds
        } else {
            resultingHours = "00" + ":" + minutes + ":" + seconds
        }

    }
    return resultingHours
}


const myHoursAM = "01:01:00AM"
const myHoursPM = "24:00:00PM"
console.log(timeConversion(myHoursPM))