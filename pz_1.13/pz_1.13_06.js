const cats = [{
	name : 'Lofi',
	breed : 'African taiman',
	age : 3,
	color : 'White'
},
{
	name : 'Cummer',
	breed : 'Shnicel',
	age : 2,
	color : 'Black'
}];
function pluck (array, prop) {
	let objProp = '';
	for(obj of array){
		objProp += obj[prop] + ' ';
	}
	return objProp;
}
console.log(pluck(cats,'name'));

