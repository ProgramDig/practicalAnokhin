let array = [1,2,3,5,5,4,6,3,2,4,4,2,2,7,8];
const funcSetArray = (array, newArray = []) => newArray = [...new Set(array)];
console.log(funcSetArray(array));