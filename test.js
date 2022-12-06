// af test file

const s = 'asdfghjkl'
const a = s.slice(0,4);
const ss = new Set(s.slice(0,4))
console.log(a , s, Array.from(ss).length)