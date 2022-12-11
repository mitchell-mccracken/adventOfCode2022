const fs = require('fs');




console.log('------------------ DAY 7 ---------------');
console.log('........................................');
const data = fs.readFileSync('./day7/input.txt', 'utf8');
// const data = fs.readFileSync('./day7/inputTest.txt', 'utf8');  //test data
const string = data.toString();
const arr = string.split('\n')

console.log(arr)
console.log(arr.length)

class Folder { 
  constructor(root, files, folders, name) {
    this.name = name
    this.root = root;
    this.files = files;
    this.folders = folders;
    this.total = 0;
  }

  get size() {
    return this.calcSize();
  }

  calcSize() {
    let size = this.files.reduce((acc, cur) => acc + cur, 0)
    return size;
  }
}

let root = new Folder('NA', [], [], '/');
let head = root;
let i = 1;
while ( i < arr.length) {
  // const element = array[i];
  const split = arr[i].split(' ');
  console.log(i)
  console.log(split)

  // showing files
  if ( split[1] === 'ls' ) {
    console.log('------------------ if ---------------');
    let loop = true;
    while ( loop && i+1 < arr.length ) {
      console.log('i is = ' + i)
      const next = arr[i+1].split(' ');
      if ( next[0] === 'dir' ) head.folders.push( new Folder(head, [], [], next[1]) );
      else if ( next[0] === '$' ) loop = false;
      else head.files.push( Number(next[0]) );
      i ++;
    }
    i --
    console.log(i)
    const size = head.size;
    addTotals(head, size);
    // console.log(head)
  }

  // navigate to new folder
  else if ( split[1] === 'cd' && split[2] !== '..' ) {
    console.log('------------------ else if 1 ---------------');
    console.log(split)
    head = head.folders.find( x => x.name === split[2] );

  }

  else if ( split[1] === 'cd' ) {
    console.log('------------------ else if 2 ---------------');
    head = head.root;

  }

  else {
    console.log('DONT panic')
    
  }

  console.log('------------------  ---------------');
  i++
}


const smFolderSize = [];

// for ( x of root.folders ) {
//   if ( x.size <= 100000 ) {
//     console.log('------------------ small folder ---------------');
//     smFolderSize.push( x.size );
//   }
//   else console.log(x)

//   console.log(x.size)
// }

// function getFolderSize(folders) {
//   for ( x of folders ) {
//     console.log('------------------ start ---------------');
//     console.log(x)
//     if ( x.size <= 100000 ) {
//       console.log('------------------ gfs if ---------------');
//       smFolderSize.push(x.size);
//     }

//     if ( x.folders.length !== 0 ) {
//       console.log('------------------ else if 1 ---------------');
//       getFolderSize( x.folders )
//     }
//     else if ( x.folders.length === 0 ) {
//       console.log('------------------ gfs else 2 ---------------');
//       return
//     }
//   }
// }

function addTotals(dir, size) {
  dir.total += size;
  if (dir.root) {
    dir.root.total += size;
    addTotals(dir.root, size);
  }
}

function _getDirSize(dir, size) {
  size = dir.size;
  // if ( dir.size < 100000 ) smFolderSize.push(dir.size);

  if ( size <= 100000 && dir.folders.length > 0 ) {
    dir.folders.forEach( x => size += getDirSize(x) );
    // size += getDirSize()
  }

  else if ( size > 100000 && dir.folders.length > 0 ) {
    size = 0;
    dir.folders.forEach( x => size += getDirSize(x) );
  }

  if ( size <= 100000 && dir.folders.length === 0 ) {
    // smFolderSize.push(size)
    return size;
  }



  // if (dir.folders.length !== 0 ) {
  //   for (x of dir.folders) getDirSize(x)
  // }
  return size
}

console.log('------------------  ---------------');
console.log('------------------  ---------------');
console.log('------------------  ---------------');

function getDirSize(dir) {
  console.log('------------------  ---------------');
  console.log(dir)
  if ( dir.total > 100000 ) {
    dir.folders.forEach( x => getDirSize(x) );
  }
  else if ( dir.total <= 100000 ) {
    smFolderSize.push(dir.total)
  }
}

getDirSize(root)



// getFolderSize(root.folders)
console.log(smFolderSize)
console.log( smFolderSize.reduce( (p, c) => p+c, 0))
console.log(root)

// 1955982 is not the answer
// 1665431 is too low
