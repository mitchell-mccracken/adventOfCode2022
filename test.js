// af test file

// const s = 'asdfghjkl'
// const a = s.slice(0,4);
// const ss = new Set(s.slice(0,4))
// console.log(a , s, Array.from(ss).length)

// const headersDiffs = {};

// const a = Object.keys(headersDiffs.global || {}).length

// console.log(a)

// let unitRate = 0;
// // unitRate = undefined

// const test = ( unitRate || unitRate === 0 ) ? true : false;
// console.log(test)

// let arr = [];
// let count = 0
// // console.log( Math.max(count, 1) )
// arr.push(Math.max(count, 1))
// console.log(arr)

// function changeDateFormat(dateString) {
//   const datesArr = dateString.split('-');
//   let string = '';
//   datesArr.forEach( date => {
//     console.log('------------------  ---------------');
//     const arr = date.split('/');
//     string += (arr[0].length === 1) ? `0${arr[0]}/` : `${arr[0]}/`;
//     string += (arr[1].length === 1) ? `0${arr[1]}/` : `${arr[1]}/`;
//     string += arr[2].slice(2);
//     string += '-'
//   });

//   return string.slice(0,-1);
// }

// console.log(changeDateFormat('1/2/2022'))

// function getDateRange(low, high) {
//   const _low = new Date(low);
//   const _high = new Date(high);

//   // this give us total days, need to find total business days
//   const dateRange = Math.floor( (_high - _low) / (1000 * 60 * 60 * 24) );
//   let days = 0
//   let businessDays = 0;
//   const weekend = [0, 6];
//   while (days < dateRange) {
//     if ( !weekend.includes(_low.getDay()) ) businessDays ++;
//     _low.setDate(_low.getDate() + 1);
//     days ++;
//   }
  
//   return businessDays;
// }

// console.log( getDateRange( '12/16/22', '12/21/22' ))

// function addBusinessDays(start, businessDays) {
//   const end = new Date(start);
//   let count = 0;
//   const weekend = [0, 6];
//   while (count < businessDays){
//     if ( !weekend.includes(end.getDay()) ) count ++;
//     end.setDate(end.getDate() + 1);
//   }
//   return end;
// }

// console.log(addBusinessDays('12/8/22', 3))

const arr = []
const a = arr.map( x => x)
console.log(arr)
console.log(a)