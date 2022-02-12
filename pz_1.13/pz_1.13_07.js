const cat = {
	name : 'Lofi',
	breed : 'African taiman',
	age : 3,
	color : 'White'
};
function count (obj){
	let value = 0;
	for (prop in obj){
		value++;
	}
	return value;
}
console.log(count(cat));