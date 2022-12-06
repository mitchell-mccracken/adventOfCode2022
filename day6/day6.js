const fs = require('fs');




console.log('------------------ DAY 6 ---------------');
console.log('........................................');
const data = fs.readFileSync('./day6/input.txt', 'utf8');
// const data = fs.readFileSync('./day6/test1.txt', 'utf8');  //test data
const string = data.toString();

let start = 0;
let end = 4;

while ( end <= string.length ) {
  const set = new Set( string.slice(start, end) );
  const len = Array.from(set).length;
  if ( len === 4 ) break;

  start ++
  end ++
}

console.log('------------------ PART 1 ---------------');
console.log(end);


start = 0;
end = 14;

while ( end <= string.length ) {
  const set = new Set( string.slice(start, end) );
  const len = Array.from(set).length;
  if ( len === 14 ) break;

  start ++
  end ++
}

console.log('------------------ PART 2 ---------------');
console.log(end);