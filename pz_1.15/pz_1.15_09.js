function reversCase (text){
	let newString ='';
	const regExp = /[eyuioa]/ig;
	for (let i = 0; i < text.length; i++){
		if(regExp.test(text[i])){
			newString += text[i].toUpperCase();
		} else {
			newString += text[i];
		}
	}
	return newString;
}
let text = 'lizzylizzy';
console.log(reversCase(text));