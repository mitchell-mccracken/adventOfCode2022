const fs = require('fs');
// const file = require('../day1/input.txt')
// console.log(file)

try {
  console.log('------------------ DAY 1 ---------------');
  console.log('........................................');
  const data = fs.readFileSync('./day1/input.txt', 'utf8');
  const string = data.toString();
  // console.log(string)
  const split = string.split('\n')
  // console.log(split)

  let max = 0;
  let placeHolder = 0

  ////////////
  // PART 1 //
  ////////////
  split.forEach( x => {
    if ( x === '' ) {
      // seperator new elf coming
      // console.log(max, placeHolder)
      if (placeHolder > max ) max = placeHolder;
      placeHolder = 0;
    }
    else {
      // this is a valid number
      placeHolder += parseInt(x)
    }
  });

  if ( placeHolder > max ) max = placeHolder

  console.log('------------------ PART 1 ---------------');
  console.log(max)


  ////////////
  // PART 2 //
  ////////////
  const arr = [];
  placeHolder = 0;
  split.forEach( x => {

    if ( x === '' ) {
      arr.push(placeHolder);
      placeHolder = 0;
    }
    else placeHolder += parseInt(x);

  });

  arr.sort( (a, b) => b-a );

  let sum =0;
  for (let index = 0; index < 3; index++) {
    sum += arr[index];
  }
  console.log('------------------ PART 2 ---------------');
  console.log(sum)

  
} catch (error) {
  console.log(error)
  
}