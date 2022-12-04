const fs = require('fs');

try {
  console.log('------------------ DAY 2 ---------------');
  console.log('........................................');
  const data = fs.readFileSync('./day4/input.txt', 'utf8');
  const string = data.toString();
  // console.log(string)
  const split = string.split('\n')


  // PART 1

  let total = 0;

  for (x of split) {
    const [ first, second ] = x.split(',');
    const firstArr = first.split('-').map( x => Number(x) );
    const secondArr = second.split('-').map( x => Number(x) );
    if ( 
      firstArr[0] >= secondArr[0] 
      && firstArr[1] <= secondArr[1] 
      ) {
      total += 1;
    }
    else if ( 
      secondArr[0] >= firstArr[0] 
      && secondArr[1] <= firstArr[1] 
      ){
      total += 1
    }
  }

  console.log('------------------ PART 1 ---------------');
  console.log(total)


  // PART 2
  let total2 = 0;

  for (x of split) {
    const [ first, second ] = x.split(',');
    const firstArr = first.split('-').map( x => Number(x) );
    const secondArr = second.split('-').map( x => Number(x) );

    // this is the first way I did it
    //-------------------------------
    // if ( firstArr[1] < secondArr[0] || secondArr[1] < firstArr[0]) {
    //   // total += 1;
    //   console.log('------------------ if ---------------');
    //   console.log(firstArr, secondArr)
    // }
    // else {
    //   // these must overlap
    //   // console.log(firstArr, secondArr);
    //   total2 += 1;
    // }
    //-------------------------------

    // better written way
    //-------------------
    if ( firstArr[1] >= secondArr[0] && secondArr[1] >= firstArr[0]) {
      total2 += 1;
    }
    //-------------------
  }

  // 897
  console.log('------------------ PART 2 ---------------');
  console.log(total2)
  
} 
catch (error) {
  console.log(error);
}