const fs = require("fs");

const array = fs.readFileSync('input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

const findColorNumber = (text) => {
    const indexBlue = text.indexOf('blue')
    const indexRed = text.indexOf('red')
    const indexGreen = text.indexOf('green')
    const RGB = [-1, -1, -1]
    if (indexBlue != -1) {
        RGB[0] = text[indexBlue-3] + text[indexBlue-2]
    }
    if (indexRed != -1) {
        RGB[1] = text[indexRed-3] + text[indexRed-2]
    }
    if (indexGreen != -1) {
        RGB[2] = text[indexGreen-3] + text[indexGreen-2]
    }
    return RGB
}

const main = () => {
    var answer = 0
    for (let i=0; i<array.length; i++) {
        const game = array[i].split(';')
        var validGame = true
        
        for (let j=0; j<game.length; j++) {
            const numberOfCubes = findColorNumber(game[j])
            if (numberOfCubes[0]> 14 || numberOfCubes[1]> 12 || numberOfCubes[2]> 13) {
                validGame = false
            }
        }
        if (validGame) {
            answer = answer + i + 1
        }
    }
    return answer
}

console.log(main())