function repeatWord (text) {
	const regExp = /\s* \s*/;
	let arrayWord = text.split(regExp);
	let result = '';
	for(let i = 0; i < arrayWord.length; i++){
		for(let j = i + 1; j < arrayWord.length; j++){
			if(arrayWord[i] == arrayWord[j]){
				if(!result.includes(arrayWord[i])){
					result += arrayWord[i];
					result += ' ';
				}
			}
		}
	}
	return result;
}
let text = 'gfd lizzy lizzy lizdzy bsu jgk bsu jgk mdg fgn ldd';
console.log(repeatWord(text));