const fs = require('fs');

try {
  console.log('------------------ DAY 5 ---------------');
  console.log('........................................');
  const data = fs.readFileSync('./day5/inputStack.txt', 'utf8');
  // const data = fs.readFileSync('./day5/exampleStack.txt', 'utf8');  //test data
  const string = data.toString();
  const stack = string.split('\n')

  const data2 = fs.readFileSync('./day5/inputMoves.txt', 'utf8');
  // const data2 = fs.readFileSync('./day5/exampleMoves.txt', 'utf8'); //test data
  const moves = data2.toString()
    .replaceAll(' ', '')
    .replaceAll('move', '')
    .replaceAll('from', '-')
    .replaceAll('to', '-')
    .split('\n');

  // PART 1

  // create objects for part 1 and 2
  let x = 1;
  const obj = {};
  const obj2 = {};
  while (x <= 9) {
    obj[x] = [];
    obj2[x] = [];
    x++
  }

  // build starting objects
  for ( line of stack  ) {
    let pos = 1;
    for (let i = 1; i < line.length; i+=4) {
      const element = line[i];
      if ( element !== ' ' && element*0 !== 0 ) {
        obj[pos].splice(0, 0, element);
        obj2[pos].splice(0, 0, element);
      }
      pos ++;
    }
  }
  // console.log(obj)


  // moves structure:
  // number to move - from stack - to stack

  for ( const move of moves ) {
    const moveArr = move.split('-');
    const subArr = obj[moveArr[1]]
      .reverse()
      .splice(0, moveArr[0]);
    obj[moveArr[2]].push(...subArr);
    obj[moveArr[1]].reverse();
  }

  console.log('------------------ PART 1 ---------------');
  let s = '';
  for ( [k, v] of Object.entries(obj) ) {
    s += v.at(-1)
  }
  console.log(s)

  // answer is not GZPGDBMJR


  // PART 2

  console.log('------------------ PART 2 ---------------');
  for ( const move of moves ) {
    const moveArr = move.split('-');
    const subArr = obj2[moveArr[1]]
      .reverse()
      .splice(0, moveArr[0])
      .reverse();
    obj2[moveArr[2]].push(...subArr);
    obj2[moveArr[1]].reverse()
  }

  let s2 = '';
  for ( [k, v] of Object.entries(obj2) ) {
    s2 += v.at(-1)
  }
  console.log(s2)

  // not TZRBNFCRM

} 
catch (error) {
  console.log(error);
}