const fs = require('fs');




console.log('------------------ DAY 8 ---------------');
console.log('........................................');
const data = fs.readFileSync('./day8/input.txt', 'utf8');
// const data = fs.readFileSync('./day8/inputTest.txt', 'utf8');  //test data
const string = data.toString();
const _arr = string.split('\n')

let trees = 0;

const arr = []
for (x of _arr) {
  arr.push( x.split('') );
}

let col = 0;
let row = 0;

while ( row < arr.length) {

  while ( col < arr[row].length ) {

    if ( 
      col === 0 
      || col === arr[row].length -1 
      || row === 0 
      || row === arr.length -1
    ) {
        // trees ++;
        addTree(row, col)
    }
    else {
      const val = arr[row][col];
      const rowCheck = checkRow(row, col, val);
      const colCheck = checkCol(row, col, val);
      if ( rowCheck || colCheck ) addTree(row, col)
    }

    col ++
  }
  col = 0;


  row ++;
}

function checkRow(row, col, val) {

  let r = row;
  let c = col-1;
  let reverse = true;
  let forward = true;
  while( c >= 0 ){
    
    const checkVal = arr[row][c];
    if (checkVal >= val) {
      reverse = false;
      // return
      break;
    }
    c --;
  }
  c = col+1;
  while ( c < arr[row].length ) {
    const checkVal = arr[row][c];
    if (checkVal >= val) {
      forward = false;
      // return;
      break;
    }
    c ++;
  }

  // trees ++;
  if (forward || reverse) return true;
  else return false
}

function checkCol(row, col, val) {

  let r = row-1;
  let c = col;
  let reverse = true;
  let forward = true;
  while (r >= 0) {
    const checkVal = arr[r][col];
    if (checkVal >= val) {
      reverse = false;
      // return;
      break;
    }
    r--
  }
  r = row+1;
  while (r < arr.length) {
    const checkVal = arr[r][col];
    if (checkVal >= val) {
      forward = false;
      // return;
      break;
    }
    r++;
  }
  // trees ++;
  if (forward || reverse) return true;
  else return false

}

function addTree(row, col){
  trees ++
}

console.log('------------------ PART 1 ---------------');
console.log(trees)




///////////////
//////// PART 2
///////////////
row = 0;
col = 0;
let max = 0;
while ( row < arr.length) {

  while ( col < arr[row].length ) {
    const scenicScoreArr = [];

    const val = arr[row][col];
    checkRow2(row, col, val, scenicScoreArr);
    checkCol2(row, col, val, scenicScoreArr);
    const total = scenicScoreArr.reduce( (p,c) => p * c, 1)
    if (total > max) {
      console.log(row, col, val);
      
      console.log(scenicScoreArr)
      console.log(total)
      max = total;
    }
    
    col ++
  }
  col = 0;

  row ++;
}


function checkRow2(row, col, val, scenicScoreArr) {
  let r= row;
  let c= col-1;
  let count = 0;
  let run = true;
  while( c >= 0 && run ) {
    
    const checkVal = arr[row][c];
    if (checkVal >= val) {
      count ++
      run = false;
      break;
    }

    count ++;
    c --;
  }
  scenicScoreArr.push(count);

  count = 0;
  c = col+1;
  run = true;
  while ( c < arr[row].length && run ) {
    const checkVal = arr[row][c];
    if (checkVal >= val) {
      count ++
      run = false;
      break;
    }

    count ++;
    c ++;
  }

  scenicScoreArr.push(count);
}

function checkCol2(row, col, val, scenicScoreArr) {

  let r = row-1;
  let c = col;
  let count = 0;
  let run = true;
  while (r >= 0 && run) {
    const checkVal = arr[r][col];
    if (checkVal >= val) {
      count ++;
      run = false;
      break;
    }

    count ++
    r--
  }
  scenicScoreArr.push(count);

  count = 0;
  r = row+1;
  run = true
  while (r < arr.length && run ) {
    const checkVal = arr[r][col];
    if (checkVal >= val) {
      count ++;
      run = false;
      break;
    }

    count++
    r++;
  }
  
  scenicScoreArr.push(count);
}

console.log('----------------- PART 2 --------------------------');
// 405769 is the correct answer
console.log(max)