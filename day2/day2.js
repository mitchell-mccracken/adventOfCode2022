const fs = require('fs');

try {
  console.log('------------------ DAY 2 ---------------');
  console.log('........................................');
  const data = fs.readFileSync('./day2/input.txt', 'utf8');
  const string = data.toString();
  // console.log(string)
  const split = string.split('\n')

  // FOR REFERENCE
  // TYPE:      OPPONENT, ME, point
  // ROCK:      A, X, 1
  // PAPER:     B, Y, 2
  // SCISSORS:  C, Z, 3

  const map = {
    X: {
      C: 'win',
      B: 'loss',
      A: 'tie'
    },
    Y: {
      A: 'win',
      C: 'loss',
      B: 'tie',
    },
    Z: {
      B: 'win',
      A: 'loss',
      C: 'tie'
    }
  };

  const point = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  let total = 0;

  for ( const x of split ) {
    const [e, m] = x.split(' ');

    let count = point[m];

    const result = map[m][e];
    if ( result === 'win' ) count += 6;
    else if ( result === 'loss' ) count += 0;
    else if ( result === 'tie' ) count += 3;
    else console.log('dont panic')

    total += count
  }

  console.log('------------------ PART 1 ---------------');
  console.log(total)


  // PART 2

  // FOR REFERENCE
  // TYPE:      OPPONENT, ME, point
  // ROCK:      A, X, 1
  // PAPER:     B, Y, 2
  // SCISSORS:  C, Z, 3

  const mapResultPoint = {
    X: 0,
    Y: 3,
    Z: 6
  };

  const myPoint = {
    A: {
      loss: 3,  // scissors
      win: 2,   // paper 
      tie: 1,   // rock
    },
    B: {
      loss: 1,  // rock
      win: 3,   // scissors
      tie: 2,   // paper
    },
    C: {
      loss: 2,   // paper
      win: 1,    // rock
      tie: 3,    // scissors
    }
  };

  let total2 = 0;

  for ( const x of split ) {
    const [e, m] = x.split(' ');
    // console.log(arr) 
    let count = mapResultPoint[m];

    const mp = myPoint[e];
    if ( count === 0 ) count += mp.loss;
    else if ( count === 3 ) count += mp.tie;
    else if ( count === 6 ) count += mp.win;
    else console.log('DONT PANIC!')

    total2 += count
  }

  console.log('------------------ PART 2 ---------------');
  console.log(total2)
  
} 
catch (error) {
  console.log(error);
}