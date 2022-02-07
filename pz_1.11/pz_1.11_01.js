let numberOfArray = 5;
let arrayReturn = function (number){
	let array = [];
	for(let count = 0; count <= number; count++){
		array.unshift(count)
	}
	return array;
}
function printArray(array){
	for(let i = 0; i < array.length; i++){
		console.log(array[i]);
	}
}
printArray(arrayReturn(numberOfArray));
console.log(`Number: ${numberOfArray}`);


