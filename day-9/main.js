const fs = require("fs");

var lines = fs.readFileSync('day-9/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

var history = []
for (let i=0; i< lines.length; i++) {
    history.push(lines[i].split(' '))
}

const makeDifferencesList = (list) => {
    var differencesList = []
    for (let i=0; i<list.length -1; i++) {
        differencesList.push(list[i+1] - list[i])
    }
    return differencesList
}

const findNextEntry = (list) => {
    var differencesList = structuredClone(list)
    var nextEntry = 0
    for (let i=0; i<list.length; i++) {
        nextEntry = nextEntry + Number(differencesList[differencesList.length -1])
        differencesList = makeDifferencesList(differencesList)
    }
    return nextEntry
}

const main = () => {
    answer = 0
    for (let i=0; i<history.length; i++) {
        answer = answer + findNextEntry(history[i])
    }
    return answer
}

console.log(main())


////////////// PART 2 /////////////////
