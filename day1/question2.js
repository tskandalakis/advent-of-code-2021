var fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split("\n").map(e => parseInt(e, 10));
//let input = [199,200,208,210,200,207,240,269,260,263];
let increaseCounter = 0;
let previousVal;

for(let i = 0; i < input.length; i++) {
    if (typeof input[i+1] === 'undefined' || typeof input[i+2] === 'undefined') {
        continue;
    }
    let a = input[i];
    let b = input[i+1];
    let c = input[i+2];
    let val = a+b+c;
    if(previousVal) {
        if(val > previousVal) {
            increaseCounter++;
            console.log(`${val} (increased)`);
        } else {
            console.log(`${val} (decreased)`);
        }
    } else {
        console.log(`${val} (N/A - no previous measurement)`);
    }
    previousVal = val;
};

console.log(increaseCounter);