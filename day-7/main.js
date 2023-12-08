const fs = require("fs");

var lines = fs.readFileSync('day-7/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

var newLines = []
for (let i=0; i< lines.length; i++) {
    newLines.push(lines[i].split(' ').filter((str) => str != ''))
}

var combinations = []
var bids = []
for (let i=0; i< newLines.length; i++) {
    combinations.push(newLines[i][0])
    bids.push(newLines[i][1])
}

const cardsListByStrength = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

const getCombinationStrength = (combination) => {
    const counts = new Map()
    for (const ch of combination) {
        const count = counts.get(ch) ?? 0
        counts.set(ch, count + 1)
    }
    const values = [...counts.values()]
    if (counts.size == 5) {
        return 1
    } else if (counts.size == 4) {
        return 2
    } else if (counts.size == 3) {
        if (values.includes(2)) {
            return 3
        } else if (values.includes(3)) {
            return 4
        }
    } else if (counts.size == 2) {
        if (values.includes(3)) {
            return 5
        } if (values.includes(4)) {
            return 6
        }
    } else if (counts.size == 1) {
        return 7
    }
}

const isBetterCombination = (combinationReference, combinationToCompare) => {
    const combinationStrengthReference = getCombinationStrength(combinationReference)
    const combinationStrengthToCompare = getCombinationStrength(combinationToCompare)
    if (combinationStrengthReference > combinationStrengthToCompare) {
        return false
    } else if (combinationStrengthReference < combinationStrengthToCompare) {
        return true
    } else if (combinationStrengthReference == combinationStrengthToCompare) {
        for (let i=0; i< combinationReference.length; i++) {
            var cardReferenceStrength = cardsListByStrength.indexOf(combinationReference[i])
            var cardToCompareStrength = cardsListByStrength.indexOf(combinationToCompare[i])
            if (cardReferenceStrength < cardToCompareStrength) {
                return false
            } else if (cardReferenceStrength > cardToCompareStrength) {
                return true
            }
        }
    }
}

const rankCombinations = (combinations, bids) => {
    var rankedCombinations = []
    var rankedBids = []
    var combinationList = structuredClone(combinations)
    while (combinationList.length > 0) {
        var minimum = combinationList[0] 
        for (let j=0; j< combinationList.length; j++){
            if (isBetterCombination(combinationList[j], minimum)) {
                minimum = combinationList[j]
            }
        }
        rankedCombinations.push(minimum)
        var indexToRemove = combinationList.indexOf(minimum)
        combinationList.splice(indexToRemove, 1)
    }
    for (let i=0; i<rankedCombinations.length; i++) {
        var indexCombination = combinations.indexOf(rankedCombinations[i])
        rankedBids.push(bids[indexCombination])
    }
    return {rankedCombinations, rankedBids}
}

const main = (combinations, bids) => {
    var answer = 0
    const {rankedCombinations, rankedBids} = rankCombinations(combinations, bids)
    for (let i=0; i< rankedCombinations.length; i++) {
        answer = answer + rankedBids[i]*(i+1)
    }
    return answer
}

console.log(main(combinations, bids))
