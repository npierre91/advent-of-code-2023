const fs = require("fs");

var lines = fs.readFileSync('day-6/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');


var newLines = []
for (let i=0; i<lines.length; i++) {
    newLines.push(lines[i].slice(10).split(' ').filter((str) => str != ''))
}

const timesList = newLines[0]
const distancesList = newLines[1]

console.log(timesList, distancesList)

const main = (timesList, distancesList) => {
    var answer = 1
    for (let i=0; i<timesList.length; i++) {
        var waysToBreakRecord = 0
        for (let pushTime = 0; pushTime< timesList[i]; pushTime++) {
            var distanceMade = pushTime * (timesList[i]-pushTime)
            if (distanceMade > distancesList[i]) {
                waysToBreakRecord = waysToBreakRecord + 1
            }
        }
        answer = answer * waysToBreakRecord
    }
    return answer
}

console.log(main(timesList, distancesList))


////////// PART 2 ///////////

var realTime = ''
var realDistance = ''
for (let i=0; i<timesList.length; i++) {
    realTime = realTime +timesList[i]
    realDistance = realDistance + distancesList[i]
}

console.log(main([realTime],[realDistance]))