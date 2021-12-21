var fs = require('fs');
let input = fs.readFileSync('./day3/input.txt').toString().split('\n');
// let input = [
//     '00100',
//     '11110',
//     '10110',
//     '10111',
//     '10101',
//     '01111',
//     '00111',
//     '11100',
//     '10000',
//     '11001',
//     '00010',
//     '01010'];

let oxygenMatrix = input.map(i => i.replace('\r','').split(''));
let co2Matrix = input.map(i => i.replace('\r','').split(''));

let oI = 0
while(oI < oxygenMatrix[0].length){
    let c0 = 0;
    let c1 = 0;
    let mostCommon;
    for(let y = 0; y < oxygenMatrix.length; y++) {
        if(oxygenMatrix[y][oI] === '1') {
            c1++;
        } else {
            c0++
        }
    }
    mostCommon = (c1>c0 || c1 === c0) ? '1' : '0';
    for(let y = 0; y < oxygenMatrix.length; y++) {
        if(oxygenMatrix[y][oI] !== mostCommon) {
            oxygenMatrix.splice(y, 1);
            y--;
        }
    }
    oI++;
}

let cI = 0
while(cI < co2Matrix[0].length){
    let c0 = 0;
    let c1 = 0;
    let leastCommon;
    for(let y = 0; y < co2Matrix.length; y++) {
        if(co2Matrix[y][cI] === '1') {
            c1++;
        } else {
            c0++
        }
    }
    leastCommon = (c0 < c1 || c1 === c0) ? '0' : '1';
    for(let y = 0; y < co2Matrix.length; y++) {
        if(co2Matrix[y][cI] !== leastCommon) {
            co2Matrix.splice(y, 1);
            y--;
        }
    }
    if(co2Matrix.length === 1){
        break;
    }
    cI++;
}

console.log(oxygenMatrix[0])
console.log(co2Matrix[0])

console.log(parseInt(oxygenMatrix[0].join(''), 2) * parseInt(co2Matrix[0].join(''), 2))