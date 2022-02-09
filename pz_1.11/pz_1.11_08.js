let array = [3,4,5,2];
const sumArray = array.reduce ((prev, item) => prev += item);
const calculate = (array, funcArray) => funcArray / array.length;
console.log(calculate(array, sumArray))