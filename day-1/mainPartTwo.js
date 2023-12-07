const fs = require("fs");

var lines = fs.readFileSync('day-1/example.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n").slice(0, -1);

    return array
}).toString().split('\n');

const findNumbersInLine = (text) => {
    var firstNumber = ""
    var lastNumber = ""
    var i = 0
    var j = text.length
    var indexFirst
    var indexLast
    while (firstNumber.length<1 || lastNumber.length<1) {
        console.log('non')
        if (!Number.isNaN(Number(text[i]))) {
            firstNumber = firstNumber + text[i]
            indexFirst = i
            i=NaN
        }
        if (!Number.isNaN(Number(text[j]))) {
            lastNumber = lastNumber + text[j]
            indexLast = j
            j=NaN
        }
        else {
            if (!i.isNaN) {
                i=1+i
            }
            if (!j.isNaN) {
                j=-1+j
            }
        }
    } 
    return {
        firstNumber: firstNumber,
        lastNumber: lastNumber, 
        indexFirst: indexFirst, 
        indexLast: indexLast
    }

}

const findLitterals = (text) => {
    const litterals = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var indexFirstLitterals = []
    var indexLastLitterals = []
    var firstLitteral = text.length + 1
    var lastLitteral = -1
    var indexFirstLitteral
    var indexLastLitteral
    for (let i=0; i< litterals.length; i++) {
        indexFirstLitterals.push(text.indexOf(litterals[i]))
        indexLastLitterals.push(text.lastIndexOf(litterals[i]))
    }
    for (let i=0; i < litterals.length; i++) {
        if (indexFirstLitterals[i] >0 && indexFirstLitterals[i] <firstLitteral) {
            firstLitteral = i+1
            indexFirstLitteral = indexFirstLitterals[i]
        }
        if (indexLastLitterals[i]>lastLitteral) {
            lastLitteral = i+1
            indexLastLitteral = indexLastLitterals[i]
        }
    }

    if (firstLitteral > text.length) {
        return null
    }
    return {
        firstLitteral: firstLitteral, 
        lastLitteral: lastLitteral, 
        indexFirstLitteral: indexFirstLitteral, 
        indexLastLitteral: indexLastLitteral
    }
}
console.log(findNumbersInLine('29lzrxseven'))
console.log(findLitterals('29lzrxseven'))


const main = (lines) => {
    answer = 0
    for (let i=0; i< lines.length; i++) {
        console.log('ok')
        var firstNumber = ''
        var lastNumber = '' 
        
        numbers = findNumbersInLine(lines[i].slice(0, -1))
        console.log('oui')
        litterals = findLitterals(lines[i])
        if (litterals) {
            if (numbers.indexFirst < litterals.indexFirstLitteral) {
                firstNumber = firstNumber + numbers.firstNumber
            } else {
                firstNumber = firstNumber + litterals.firstLitteral
            }
            if (numbers.indexLast > litterals.indexLastLitteral) {
                lastNumber = lastNumber + numbers.lastNumber
            } else {
                lastNumber = lastNumber + litterals.lastLitteral
            }
        }
        answer = answer + Number(firstNumber + lastNumber)
    }
    console.log(answer)
    
}

main(lines)