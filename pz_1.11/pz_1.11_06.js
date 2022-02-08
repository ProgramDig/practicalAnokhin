let array = [1,2,3,5,5,4,6,3,2,4,4,2,2,7,8];

const funcSet = (array) => {
	let mySet = new Set();
	let newArray = [];
	array.forEach(element => {
		newArray.concat(mySet.add(element));
	});
	return mySet;
};

console.log(funcSet(array));