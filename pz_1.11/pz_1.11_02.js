let array = [3,3,3,3,10,3,3,3,3];
let extraDigit = array.filter((value, i, arr) => arr.indexOf(value))
console.log(extraDigit);