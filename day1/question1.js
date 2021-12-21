var fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split("\n").map(e => parseInt(e, 10));
//let input = [199,200,208,210,200,207,240,269,260,263];
let increaseCounter = 0;
let previousVal;

for(let element of input) {
    if(previousVal) {
        if(element > previousVal) {
            increaseCounter++;
            console.log(`${element} (increased)`);
        } else {
            console.log(`${element} (decreased)`);
        }
    } else {
        console.log(`${element} (N/A - no previous measurement)`);
    }
    previousVal = element;
};

console.log(increaseCounter);