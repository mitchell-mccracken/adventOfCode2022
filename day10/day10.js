const fs = require('fs');


console.log('------------------ DAY 10 ---------------');
console.log('........................................');
const data = fs.readFileSync('./day10/input.txt', 'utf8');
// const data = fs.readFileSync('./day10/inputTest.txt', 'utf8');  //test data
// const data = fs.readFileSync('./day10/inputTest2.txt', 'utf8');  //test data
const string = data.toString();
const arr = string.split('\n')

// console.log(arr)

let cycle = 0
let count = 1
let previousCount = 1;
const counts = [];
const signal = [];

for ( const x of arr ) {
  const [action, val] = x.split(' ');

  // check that we didn't record the previous count (prevents counting cycle 20 and 21...)
  const cycleOk = (counts.at(-1) !== cycle-1)

  // check if multiple of 40 (iterates by at most two so we will always land on an iteration of 40 or that iteration + 1)
  const cycleIsMult40 = ( (cycle-20)%40 === 0  );
  const cycleIsMult40Plus1 = ( (cycle -21)%40 === 0 );


  if ( cycle === 20 ) {
    // console.log('------------------ 20 ---------------');
    // console.log(count * cycle);
    signal.push(count * cycle);
  }
  else if ( cycle === 21 ) {
    // console.log('------------------ 21 ---------------');
    // console.log( previousCount * (cycle - 1) );
    signal.push(previousCount * (cycle - 1) );
  }
  else if ( cycleIsMult40 && cycleOk ) {
    // console.log('------------------  p---------------');
    counts.push(cycle);
    // console.log(cycle, previousCount, count);
    // console.log(previousCount * cycle);
    signal.push((previousCount * cycle));
  }
  else if ( cycleIsMult40Plus1 && cycleOk ) {
    // console.log('------------------  ---------------');
    counts.push(cycle);
    // console.log(cycle, previousCount, count);
    // console.log( previousCount * (cycle-1) );
    signal.push( previousCount * (cycle-1) );
  }
  
  // set count as a place holder in case we need to go back to it but I dont think we do...
  previousCount = count;

  if ( action === 'noop' ){
    cycle ++;
  }
  else {
    cycle += 2;
    count += Number(val)
  }
}

// console.log(count)
// console.log(signal)
console.log('------------------ PART 1 ---------------');
console.log( signal.reduce( (a, b) => a + b, 0) );

console.log('------------------  ---------------');
console.log('------------------  ---------------');

let col = 0;
const arr2 = []

while ( col < 240 ) {
  arr2.push('.');
  col ++;
}


cycle = 0;
let sLow = 0;
let s = 1;
let sHigh = 2;
let updateCount = -1;
let updateVal = 0;


// add in blank rows so I can iterate through the array
const arrAdded = [];
arr.forEach( x => {
  const [action, ] = x.split(' ');
  arrAdded.push(x);
  if (action !== 'noop') arrAdded.push('next')
} );

// console.log(arrAdded)

// add pixels
for ( const x of arrAdded ) {
  const [action, val] = x.split(' ');

  // check if they match and write in "#"
  const _cycle = cycle % 40;
  if ( _cycle === sLow || _cycle === s || _cycle === sHigh ) {
    arr2[cycle] = '#';
  }

  // this means we will be updating the sprite position in a couple cycles, create placeholders
  if ( action === 'addx' ) {
    updateCount = cycle + 2;
    updateVal = Number(val);
  }

  // update cycle counter
  cycle ++;

  // check if sprite position needs updated before next cycle
  if ( cycle === updateCount ) {
    s += updateVal;
    sLow = s-1;
    sHigh = s+1;
  }

}

// build array of arrays
const arr3 = [ [], [], [], [], [], [] ];

for (x in arr2) {
  const row = Math.floor(x/40);
  arr3[row].push( arr2[x] );
}

// map to array of strings for readability
const arr4 = arr3.map( x => x.reduce( (a,b) => a + b, '' ) );
console.log(arr4)