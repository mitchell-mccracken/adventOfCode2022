
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
  [76, 88, 96, 97, 58, 61, 67],
  (i) => { return i * 19 },
  (i) => { return (i%3 === 0) },
  'monkey2',
  'monkey3',
);

const monkey1 = new Monkey(
  [93, 71, 79, 83, 69, 70, 94, 98],
  (i) => { return i + 8 },
  (i) => { return (i%11 === 0) },
  'monkey5',
  'monkey6',
);

const monkey2 = new Monkey(
  [50, 74, 67, 92, 61, 76],
  (i) => { return i * 13 },
  (i) => { return (i%19 === 0) },
  'monkey2',
  'monkey3',
);

const monkey3 = new Monkey(
  [76, 92],
  (i) => { return i + 6 },
  (i) => { return (i%5 === 0) },
  'monkey2',
  'monkey3',
);

const monkey4 = new Monkey(
  [74, 94, 55, 87, 62],
  (i) => { return i + 5 },
  (i) => { return (i%2 === 0) },
  'monkey2',
  'monkey3',
);

const monkey5 = new Monkey(
  [59, 62, 53, 62],
  (i) => { return i * i },
  (i) => { return (i%7 === 0) },
  'monkey2',
  'monkey3',
);

const monkey6 = new Monkey(
  [62],
  (i) => { return i + 2 },
  (i) => { return (i%17 === 0) },
  'monkey2',
  'monkey3',
);

const monkey7 = new Monkey(
  [85, 54, 53],
  (i) => { return i + 3 },
  (i) => { return (i%13 === 0) },
  'monkey2',
  'monkey3',
);

monkey0.trueTest = monkey2;
monkey0.falseTest = monkey3;

monkey1.trueTest = monkey5;
monkey1.falseTest = monkey6;

monkey2.trueTest = monkey3;
monkey2.falseTest = monkey1;

monkey3.trueTest = monkey1;
monkey3.falseTest = monkey6;

monkey4.trueTest = monkey2;
monkey4.falseTest = monkey0;

monkey5.trueTest = monkey4;
monkey5.falseTest = monkey7;

monkey6.trueTest = monkey5;
monkey6.falseTest = monkey7;

monkey7.trueTest = monkey4;
monkey7.falseTest = monkey0;

const monkeyArr = [monkey0, monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7];

let c = 0;

while ( c < 20 ) {
  // console.log('------------------ c ---------------');
  for ( m of monkeyArr ) {
    // console.log('------------------ m ---------------');
    // console.log(m.items)
    for ( i of m.items ) {
      let n = m.func(i);
      n = Math.floor(n/3);
      let t = m.test(n);
      const receivingMonkey = (t) ? m.trueTest : m.falseTest;
      receivingMonkey.items.push(n);
      m.count ++;
    }
    m.items = [];
  }
  c++;
}

// for ( const item of monkey0.items ) {
//   let n = monkey0.func(item)
//   n = Math.floor(n/3);
//   let t = monkey0.test(n);
//   // console.log(t)
//   const receivingMonkey = (t) ? monkey0.trueTest : monkey0.falseTest;
//   // t.items.push(n)
//   receivingMonkey.items.push(n)
  

//   console.log(n, t)
// }

// console.log(monkey2.items)
// console.log(monkey3.items)

const counts = [];
for ( m of monkeyArr ) {
  counts.push(m.count)
  console.log(182293/m.count)
}

const max1 = Math.max(...counts);
// console.log(max1);
counts.splice( counts.findIndex( x => x === max1 ), 1 );
// console.log(counts);
const max2 = Math.max(...counts);
console.log(max1, max2, max1*max2)

// 223693 is not the right answer - too high
// 212496 is not the right answer - too high