function getNum (string ='') {
	let result = 0;
	for(let i = 0; i < string.length; i++){
		result += string[i].charCodeAt();
	}
	return result;
}
console.log(getNum('aaa'));