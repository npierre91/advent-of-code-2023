const fs = require("fs");

const findNumbersInLine = (text) => {
    var firstNumber = ""
    var lastNumber = ""
    var i = 0
    var j = text.length
    while (firstNumber.length<1 || lastNumber.length<1) {
        if (!Number.isNaN(Number(text[i]))) {
            firstNumber = firstNumber + text[i]
            i=NaN
        }
        if (!Number.isNaN(Number(text[j]))) {
            lastNumber = lastNumber + text[j]
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
    
    return firstNumber + lastNumber

}


var answer = 0
fs.readFile('input.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        const text = array[i].slice(0, -1)
        answer = answer + Number(findNumbersInLine(text))
    }
    console.log(answer)
});
return answer

