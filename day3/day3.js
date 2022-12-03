const fs = require('fs');

try {
  console.log('------------------ DAY 2 ---------------');
  console.log('........................................');
  const data = fs.readFileSync('./day3/input.txt', 'utf8');
  const string = data.toString();
  // console.log(string)
  const split = string.split('\n')

  const letters = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log(letters.length)

  // PART 1

  let total = 0;
  for ( const x of split ) {
    const count = x.length;
    const first = x.slice(0, count/2);
    const second = x.slice(count/2);

    for ( const y of second ) {
      const idx = first.indexOf(y);
      
      if ( idx >= 0 ) {
        total += letters.indexOf(y);
        break;
      }

    }
  }

  console.log('------------------ PART 1 ---------------');
  console.log(total)


  // PART 2
  let total2 = 0;
  let tempArr = [];
  for ( const x in split ) {

    tempArr.push( split[x] );

    if ( (x + 1) % 3 === 0 ) {
      //check for common - more efficient way would be to find which sting has the least characters and iterate that one
      for ( const y of tempArr[0] ) {
        const idx2 = tempArr[1].indexOf(y);
        const idx3 = tempArr[2].indexOf(y);

        if ( idx2 >= 0 && idx3 >= 0 ){
          total2 +=letters.indexOf(y);
          break;
        }

      }

      // reset tempArr
      tempArr = [];
    }

  }

  console.log('------------------ PART 2 ---------------');
  console.log(total2)
  
} 
catch (error) {
  console.log(error);
}