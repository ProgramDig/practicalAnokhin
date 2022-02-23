function repeatWord (text) {
	const regExp = /\s* \s*/;
	let arr = text.split(regExp);
	let result = [];
	for (let i = 0; i < arr.length; ++i){
		let a = arr[i];
		if (result[a] != undefined){
			++result[a];
		} else {
			result[a] = 1;
		}
	}
	for(let r in result){
		console.log(`${r} => ${result[r]}`);
  	}
}
let text = 'gfd lizzy lizzy lizdzy bsu jgk bsu jgk mdg fgn ldd';
console.log(repeatWord(text));

	// const regExp = /\s* \s*/;
	// let arrayWord = text.split(regExp);
	// let result = '';
	// let count = 1;
	// for(let i = -1; i < arrayWord.length; i++){
	// 	for(let j = i + 1; j < arrayWord.length; j++){
	// 		count++;
	// 		if (arrayWord[i] == arrayWord[j]){
	// 			result += arrayWord[i];
	// 			result += ' ';
	// 			console.log(`${arrayWord[i]} => ${count}`);
	// 			result += arrayWord[i];
	// 		} else {
	// 			if(!result.includes(arrayWord[i])){
	// 				result += arrayWord[i];
	// 				result += ' ';
	// 				console.log(`${arrayWord[i]} => ${count = 1}`);
	// 			}
	// 		}
	// 		count = 1;
	// 	}
	// }