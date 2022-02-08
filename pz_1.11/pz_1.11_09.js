const array = [2,3,6,2,1,'d',3,'a'];
const funcIsInt = array.filter((num) => {
	if(Number.isInteger(num)){
		return true;
	} else {
		return false;
	}
});
funcIsInt.forEach(e =>	console.log(e * e));
