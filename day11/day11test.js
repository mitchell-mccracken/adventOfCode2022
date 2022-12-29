
class Monkey {
  constructor(items, func, test, trueTest, falseTest) {
    this.items = items;
    this.func = func;
    this.test = test;
    this.trueTest = trueTest;
    this.falseTest = falseTest;
    this.count = 0;


  }
}

const monkey0 = new Monkey(
  [79, 98],
  (i) => { return i * 19 },
  (i) => { return (i%23 === 0) },
  'monkey2',
  'monkey3',
);

const monkey1 = new Monkey(
  [54, 65, 75, 74],
  (i) => { return i + 6 },
  (i) => { return (i%19 === 0) },
  'monkey5',
  'monkey6',
);

const monkey2 = new Monkey(
  [79, 60, 97],
  (i) => { return i * i },
  (i) => { return (i%13 === 0) },
  'monkey2',
  'monkey3',
);

const monkey3 = new Monkey(
  [74],
  (i) => { return i + 3 },
  (i) => { return (i%17 === 0) },
  'monkey2',
  'monkey3',
);

// const monkey4 = new Monkey(
//   [74, 94, 55, 87, 62],
//   (i) => { return i + 5 },
//   (i) => { return (i%2 === 0) },
//   'monkey2',
//   'monkey3',
// );

// const monkey5 = new Monkey(
//   [59, 62, 53, 62],
//   (i) => { return i * i },
//   (i) => { return (i%7 === 0) },
//   'monkey2',
//   'monkey3',
// );

// const monkey6 = new Monkey(
//   [79, 98],
//   (i) => { return i * 19 },
//   (i) => { return (i%23 === 0) },
//   'monkey2',
//   'monkey3',
// );

// const monkey7 = new Monkey(
//   [85, 54, 53],
//   (i) => { return i + 3 },
//   (i) => { return (i%13 === 0) },
//   'monkey2',
//   'monkey3',
// );

monkey0.trueTest = monkey2;
monkey0.falseTest = monkey3;

monkey1.trueTest = monkey2;
monkey1.falseTest = monkey0;

monkey2.trueTest = monkey1;
monkey2.falseTest = monkey3;

monkey3.trueTest = monkey0;
monkey3.falseTest = monkey1;

// monkey4.trueTest = monkey2;
// monkey4.falseTest = monkey0;

// monkey5.trueTest = monkey4;
// monkey5.falseTest = monkey7;

// monkey6.trueTest = monkey5;
// monkey6.falseTest = monkey7;

// monkey7.trueTest = monkey4;
// monkey7.falseTest = monkey0;

// const monkeyArr = [monkey0, monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7];
const monkeyArr = [monkey0, monkey1, monkey2, monkey3];

let c = 0;

// while ( c < 20 ) {
while ( c < 20 ) {
  console.log('------------------ c ---------------');
  for ( m of monkeyArr ) {
    console.log('------------------ m ---------------');
    console.log(m.count)
    for ( i of m.items ) {
      let n = m.func(i);
      // n = Math.floor(n/3);
      let t = m.test(n);
      const receivingMonkey = (t) ? m.trueTest : m.falseTest;
      receivingMonkey.items.push(n);
      m.count ++;
    }
    m.items = [];
  }
  c++;
}


const counts = [];
for ( m of monkeyArr ) {
  counts.push(m.count)
  console.log(m.count)
}

const max1 = Math.max(...counts);
// console.log(max1);
counts.splice( counts.findIndex( x => x === max1 ), 1 );
// console.log(counts);
const max2 = Math.max(...counts);
console.log(max1, max2, max1*max2)


// 223693 is not the right answer - too high