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


/*
We actually never need to construct the new element of every difference list, 
since we can prove that the next entry will be the sum of the last element of each difference list plus the last term of the list we are extrapolating
This is an easy proof by induction with the assumptions made in this problem.
*/
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

/*
We proceed nearly the same way than in part 1, except this time the solution is the sum of terms but with an alternating sign depending on the parity of the difference list number
(if the list is the (2*n+1)th one, it is substracted, it is added otherwise)
*/

const findPreviousEntry = (list) => {
    var differencesList = structuredClone(list)
    var previousEntry = Number(list[0])
    for (let i=0; i< list.length -1; i++) {
        differencesList = makeDifferencesList(differencesList)
        if (i%2 == 0) {
            previousEntry = previousEntry - Number(differencesList[0])
        } else {
            previousEntry = previousEntry + Number(differencesList[0])
        }
    }
    return previousEntry
}


const mainPartTwo = () => {
    answer = 0
    for (let i=0; i<history.length; i++) {
        answer = answer + findPreviousEntry(history[i])
    }
    return answer
}

console.log(mainPartTwo())