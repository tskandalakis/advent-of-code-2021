var fs = require('fs');
let input = fs.readFileSync('./day2/input.txt').toString().split("\n");
//let input = ['forward 5', 'down 5','forward 8','up 3','down 8','forward 2'];
let aim = 0;
let depth = 0;
let horizontalPosition = 0;

for(let i = 0; i < input.length; i++) {
    let action = input[i].split(' ')[0];
    let value = parseInt(input[i].split(' ')[1], 10);
    switch(action) {
        case 'up':
            aim-=value;
          break;
        case 'down':
            aim+=value;
            break;
        case 'forward':
            horizontalPosition+=value;
            depth+= aim*value;
            break;
        default:
      } 
};

console.log(depth*horizontalPosition);