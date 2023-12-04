const fs = require("fs");

var lines = fs.readFileSync('day-4/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

var winningNumbersWithEmpty = []
var elfNumbersWithEmpty = []
var numbersSplit = []
var winningNumbers = []
var elfNumbers = []
for (let i=0; i<lines.length; i++) {
    lines[i] = lines[i].substring(9)
    numbersSplit.push(lines[i].toString().split('|'))
    winningNumbersWithEmpty.push(numbersSplit[i][0].toString().split(' '))
    elfNumbersWithEmpty.push(numbersSplit[i][1].toString().split(' '))
    winningNumbers.push(winningNumbersWithEmpty[i].filter((str) => str != ''))
    elfNumbers.push(elfNumbersWithEmpty[i].filter((str) => str != ''))
}

const isWinningNumber = (gameIndex, elfNumber) => {
    for (let i=0; i< winningNumbers[gameIndex].length; i++) {
        if (elfNumber == winningNumbers[gameIndex][i]) {
            return true
        }
    }
    return false
}

const calculateGamePoints = ( gameIndex, elfNumbersGame) => {
    var winningNumbersAmount = 0
    var isWinningGame = false
    for (let i=0; i<elfNumbersGame.length; i++) {
        if (isWinningNumber(gameIndex, Number(elfNumbersGame[i]))) {
            winningNumbersAmount = winningNumbersAmount + 1
            isWinningGame = true
        }
    }
    if (isWinningGame) {
        return 2 ** (winningNumbersAmount -1)
    }
    return 0
}

const main = (winningNumbersList, elfNumbersList) => {
    answer = 0
    for (let i=0; i<winningNumbersList.length; i++) {
        answer = answer + calculateGamePoints(i, elfNumbersList[i])
    }
    return answer
}

console.log(main(winningNumbers, elfNumbers))

