function countLetter (text) {
	let result ='';
	const regExpVowels = /[eyuioa]/gi;
	const regExpConsonans = /[qwrtpsdfghjklzxcvbnm]/gi;
	if (typeof text == 'string'){
		let countConsonans = text.match(regExpConsonans).length - 1;
		let countVowels = text.match(regExpVowels).length - 1;
		result = `text: "${text}", голосних: ${countConsonans}, приголосних: ${countVowels}.`;
	} else {
		result = `text: ${text} не є строчкою`;
	}
	return result;
}
const text = 'Hello my brother, nice to meet you!';
console.log(countLetter(text));

