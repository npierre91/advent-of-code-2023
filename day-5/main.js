const fs = require("fs");

var lines = fs.readFileSync('day-5/example.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

const seedsLine = lines[0].slice(7, -1).split(' ')
var j=-1
var Maps = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
}

for (let i=1; i<lines.length; i++) {
    if (lines[i].indexOf(':') !== -1) {
        j=j+1
    } else if (lines[i].length > 1) {
        console.log(i)
        Maps[j].push(lines[i])
    }
}

const seedToSoilMap = Maps[0]
const soilToFertilizerMap = Maps[1]
const fertilizerToWaterMap = Maps[2]
const waterToLightMap = Maps[3]
const lightToTemperatureMap = Maps[4]
const temperatureToHumidityMap = Maps[5]
const humidityToLocationMap = Maps[6]

console.log(seedsLine)
console.log(seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap)