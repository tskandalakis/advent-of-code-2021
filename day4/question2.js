var fs = require('fs');

let boards = [];
let boardTracker = [];
let input = fs.readFileSync('./day4/input1.txt').toString().split(',').map((e) => parseInt(e, 10));
let input2 = fs.readFileSync('./day4/input2.txt').toString().split('\n');

let i = 0;
for(let line of input2) {
    if(line === '\r') {
        i++;
    } else {
        line = line.replace('\r', '');
        if(!boards[i]) {
            boards[i] = [];
        }
        if(!boardTracker[i]) {
            boardTracker[i] = [];
        }
        boards[i].push(line2Array(line));
        boardTracker[i].push(['O', 'O', 'O', 'O', 'O']);
    }
}

let boardTotal = boards.length;
let boardsThatWon = {};
let lastWinningBoard = {
    boardIndex: null,
    input: null
}
for(let i of input) {
    updateBoardTracker(i);
    for(let x = 0; x < boardTracker.length; x++) {
        let didBoardWin = checkBoard4Win(boardTracker[x]);
        if(didBoardWin && !boardsThatWon[x]) {
            boardsThatWon[x] = i;
            lastWinningBoard = {
                boardIndex: x,
                input: i
            }
        }
        if(Object.keys(boardsThatWon).length === boardTotal) {
            break;
        }
    }
    if(Object.keys(boardsThatWon).length === boardTotal) {
        break;
    }
}
console.log(`Last Winning Board: ${lastWinningBoard.boardIndex}`);
console.log(`Winnging Number: ${lastWinningBoard.input}`);
let score = unmarkedScore(lastWinningBoard.boardIndex);
console.log(`Answer: ${lastWinningBoard.input*score}`);

function line2Array(line) {
    let lineArr = [];

    while(line.length > 0) {
        if(line.length > 0){
            let num = line.slice(0, 2);
            lineArr.push((num === ' 0') ? 0 : parseInt(num, 10));
            line = line.substring((line.length > 2) ? 3 : 2);
        }
    }

    return lineArr;
}

function updateBoardTracker(input) {
    for(let i = 0; i < boards.length; i++) {
        for(let x = 0; x < boards[i].length; x++) {
            for(let y = 0; y < boards[i][x].length; y++) {
                if(boards[i][x][y]===input) {
                    if(!boardsThatWon[i]){
                        boardTracker[i][x][y] = 'X';
                    }
                }
            }
        }
    }
}

function unmarkedScore(i) {
    let score = 0;
    for(let x = 0; x < boardTracker[i].length; x++) {
        for(let y = 0; y < boardTracker[i][x].length; y++) {
            if(boardTracker[i][x][y]==='O') {
                score += boards[i][x][y];
            }
        }
    }
    return score;
}

function checkBoard4Win(board) {
    
    // check rows
    for(let x = 0; x < board.length; x++) {
        let rowCount = 0;
        for(let y = 0; y < board[x].length; y++) {
            if(board[x][y] === 'X'){
                rowCount++;
            }
        }
        if(rowCount === board[x].length){
            return true;
        }
    }

    // check cols
    for(let y = 0; y < board[0].length; y++) {
        let colCount = 0;
        for(let x = 0; x < board.length; x++) {
            if(board[x][y] === 'X'){
                colCount++;
            }
        }
        if(colCount === board[0].length){
            return true;
        }
    }

    return false;
}