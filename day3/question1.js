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
let gamma = '';
let epsilon = '';

let matrix = input.map(i => i.replace('\r','').split(''));

for(let i = 0; i < matrix[i].length; i++) {
    let c0 = 0;
    let c1 = 0;
    for(let y = 0; y < matrix.length; y++) {
        if(matrix[y][i] === '1') {
            c1++;
        } else {
            c0++
        }
    }
    if(c0>c1) {
        gamma+='0';
        epsilon+='1';
    } else {
        gamma+='1';
        epsilon+='0';
    }
}
console.log(gamma)
console.log(epsilon)

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))