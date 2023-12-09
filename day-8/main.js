const fs = require("fs");

var lines = fs.readFileSync('day-8/input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");

    return array
}).toString().split('\n');

const instructions = lines[0]
var nodes = []

for (let i=2; i<lines.length; i++) {
    nodes.push(lines[i])
}

var nodesDict = {}
for (let i=0; i < nodes.length; i++) {
    nodesDict[nodes[i].substr(0, 3)] = {'L': nodes[i].substr(7, 3), 'R': nodes[i].substr(12, 3)}
}


const findExit = () => {
    var currentNode = 'AAA'
    var indexInstructions = 0
    while (currentNode != 'ZZZ') {
        currentNode = nodesDict[currentNode][instructions[indexInstructions % instructions.length]]
        indexInstructions = indexInstructions + 1
        console.log(currentNode)
    }
    return indexInstructions
}

console.log(findExit())


 ///////////// PART 2 ////////////////
const findAllEntries = () => {
    var entries = []
    for (let i=0; i< nodes.length; i++) {
        if (nodes[i].substr(2, 1) == 'A') {
            entries.push(nodes[i].substr(0,3))
        }
    }
    return entries 
}