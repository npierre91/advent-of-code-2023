const fs = require("fs");

const lines = fs.readFileSync('day-3/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');


var array = []
for (let a=0; a<lines.length; a++) {  
    array.push(lines[a].toString().split('').splice(0, 140))
}

const getSymbolList = (matrix) => {
    var symbolList = new Set()
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (!Number(matrix[i][j]) && matrix[i][j] != '.' && matrix[i][j] != '0' && matrix[i][j] != null) {
                symbolList.add(matrix[i][j])
            }
        }
    }
    return symbolList
}

const findAdjacentNumber = (matrix, row, column) => {
    const listAdjacent = [[matrix[row-1][column-1],matrix[row-1][column], matrix[row-1][column+1]], [matrix[row][column-1], matrix[row][column], matrix[row][column+1]], [matrix[row+1][column-1],matrix[row+1][column], matrix[row+1][column+1]]]
    return listAdjacent
}

const retrieveFullNumber = (matrix, row, column) => {
    const symbolList = getSymbolList(matrix)
    var number = matrix[row][column]
    let i=column
    while (matrix[row][i] != '.' && i>0 && !symbolList.has(matrix[row][i-1])){
        if (Number(matrix[row][i-1]) || matrix[row][i-1] === '0') {
            number = matrix[row][i-1] + number
        }
        i = i - 1
    }

    let j = column
    while (matrix[row][j] != '.' && j<matrix[row].length && !symbolList.has(matrix[row][j+1])){
        if (Number(matrix[row][j+1]) || matrix[row][j+1] === '0') {
            number = number + matrix[row][j+1] 
        }
        j = j + 1
    }
    return number
}

const main = (matrix) => {
    var answer = 0
    const symbolList = getSymbolList(matrix)
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length-1; j++) {
            symbol = matrix[i][j]
            if (symbolList.has(symbol)) {
                const listAdjacent = findAdjacentNumber(matrix, i, j)
                
                // This solution is very ugly, but I have to go with that for now

                if (Number(listAdjacent[0][1]) || listAdjacent[0][1] === '0') {
                    const fullNumber = retrieveFullNumber(matrix, i-1, j)
                    answer = answer + Number(fullNumber)
                }
                if (Number(listAdjacent[2][1]) || listAdjacent[2][1] === '0'){
                    const fullNumber = retrieveFullNumber(matrix, i+1, j)
                    answer = answer + Number(fullNumber)
                }
                if ((Number(listAdjacent[0][0]) || listAdjacent[0][0] === '0') && !(Number(listAdjacent[0][1]) || listAdjacent[0][1] === '0')){
                    const fullNumber = retrieveFullNumber(matrix, i-1, j-1)
                    answer = answer + Number(fullNumber)
                }
                if ((Number(listAdjacent[0][2]) || listAdjacent[0][2] === '0') && !(Number(listAdjacent[0][1]) || listAdjacent[0][1] === '0')){
                    const fullNumber = retrieveFullNumber(matrix, i-1, j+1)
                    answer = answer + Number(fullNumber)
                }
                if ((Number(listAdjacent[2][0]) || listAdjacent[2][0] === '0') && !(Number(listAdjacent[2][1]) || listAdjacent[2][1] === '0')){
                    const fullNumber = retrieveFullNumber(matrix, i+1, j-1)
                    answer = answer + Number(fullNumber)
                }
                if ((Number(listAdjacent[2][2]) || listAdjacent[2][2] === '0') && !(Number(listAdjacent[2][1]) || listAdjacent[2][1] === '0')){
                    const fullNumber = retrieveFullNumber(matrix, i+1, j+1)
                    answer = answer + Number(fullNumber)
                }
                if (Number(listAdjacent[1][0]) || listAdjacent[1][0] === '0') {
                    const fullNumber = retrieveFullNumber(matrix, i, j-1)
                    answer = answer + Number(fullNumber)
                }
                if (Number(listAdjacent[1][2]) || listAdjacent[1][2] === '0'){
                    const fullNumber = retrieveFullNumber(matrix, i, j+1)
                    answer = answer + Number(fullNumber)
                }
            }        
            
        }
    }
    return answer
}

console.log(main(array))