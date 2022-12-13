const fs = require('fs');




console.log('------------------ DAY 9 ---------------');
console.log('........................................');
const data = fs.readFileSync('./day9/input.txt', 'utf8');
// const data = fs.readFileSync('./day9/inputTest.txt', 'utf8');  //test data
// const data = fs.readFileSync('./day9/inputTest2.txt', 'utf8');  //test data
const string = data.toString();
const arr = string.split('\n')

console.log(arr)

// row , col
const h = [0, 0];
const h1 = [0, 0];
const h2 = [0, 0];
const h3 = [0, 0];
const h4 = [0, 0];
const h5 = [0, 0];
const h6 = [0, 0];
const h7 = [0, 0];
const h8 = [0, 0];
const t = [0, 0];
const set = new Set();
const bigArr = [h, h1, h2, h3, h4, h5, h6, h7, h8, t];

for ( const x of arr ) {
  const [dir, count] = x.split(' ');
  
  // console.log(dir, count)
  let moves = 0

  // r = pos col move
  if (dir === 'R'){
    while ( moves < count ) {
      h[1] ++; 
      moves ++
      checkTail(1)
    }
  }


  // l = neg col move
  else if (dir === 'L'){
    while (moves < count){
      h[1] --;
      moves ++;
      checkTail(-1)
    }
  }

  // u = pos row move
  else if (dir === 'U'){
    while (moves < count){
      h[0] ++;
      moves ++;
      checkTail(1)
    }
  }


  // d = neg row move
  else if (dir === 'D'){
    while (moves < count){
      h[0] --;
      moves ++;
      checkTail(-1)
    }
  }

}

// dir is +1 or -1
function checkTail(dir) {
  const deltaRow = Math.abs( h[0] - t[0] );
  const deltaCol = Math.abs( h[1] - t[1] );

  if ( deltaCol > 1 ){
    if ( deltaRow === 0 ) t[1] += dir 
    else {
      t[1] += dir;
      t[0] = h[0];
    }
  }

  else if ( deltaRow > 1){
    if ( deltaCol === 0 ) t[0] += dir;
    else {
      t[1] = h[1]
      t[0] +=dir
    }
  }

  // console.log(t)
  set.add(`${t[0]}-${t[1]}`);
}

// console.log(set)
const _arr = Array.from(set)
console.log('------------------ PART 1 ---------------');
console.log(_arr.length)



////////////
// PART 2 //
////////////

// reset
h[0] = 0
h[1] = 0
t[0] = 0
t[1] = 0
const part2Set = new Set();
console.log(bigArr)

for ( const x of arr ) {
  
  const [dir, count] = x.split(' ');


  console.log(bigArr)
  console.log('------------------  ---------------');
  console.log(dir, count)
  
  let moves = 0

  // r = pos col move
  if (dir === 'R'){
    while ( moves < count ) {
      h[1] ++; 
      moves ++
      // checkTail(1)
      loop(1)
    }
  }


  // l = neg col move
  else if (dir === 'L'){
    while (moves < count){
      h[1] --;
      moves ++;
      // checkTail(-1)
      loop(-1)
    }
  }

  // u = pos row move
  else if (dir === 'U'){
    while (moves < count){
      h[0] ++;
      moves ++;
      // checkTail(1)
      loop(1)
    }
  }


  // d = neg row move
  else if (dir === 'D'){
    while (moves < count){
      h[0] --;
      moves ++;
      // checkTail(-1)
      loop(-1)
    }
  }

}


// dir is +1 or -1
function checkTail2(h, t, dir) {
  const deltaRow = Math.abs( h[0] - t[0] );
  const deltaCol = Math.abs( h[1] - t[1] );

  if ( deltaCol > 1 ){
    // if ( deltaRow === 0 ) t[1] += dir 
    if ( deltaRow === 0 ) t[1] += (h[1]-t[1]) ;
    else {
      // t[1] += dir;
      t[1] += (h[1]-t[1])
      t[0] = h[0];
    }
  }

  else if ( deltaRow > 1){
    // if ( deltaCol === 0 ) t[0] += dir;
    if ( deltaCol === 0 ) t[0] += (h[0]-t[0]);
    else {
      t[1] = h[1]
      // t[0] +=dir
      t[0] += (h[0]-t[0])
    }
  }

  // console.log(t)
  set.add(`${t[0]}-${t[1]}`);
}

function loop(dir) {
  for (let i = 0; i < bigArr.length - 1; i++) {
    const h = bigArr[i];
    const t = bigArr[i+1];
    checkTail2(h, t, dir)

    if ( i === bigArr.length - 2 ) part2Set.add(`${t[0]}-${t[1]}`);
  }
}

const part2 = Array.from(part2Set).length;
console.log('------------------ PART 2 ---------------');
console.log(part2)
// 2480 too low
