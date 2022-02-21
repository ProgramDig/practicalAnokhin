function fileExtension (inputPath) {
	let result = '';
	if(typeof inputPath == 'string'){
		const reg = /\..*/;
		result = inputPath.match(reg);
	} else {
		result = 'inputPath не строка';
	}
	return result;
}
const inputPath = '/cond.html';
console.log(fileExtension(inputPath));