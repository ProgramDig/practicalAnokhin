function generateNumber () {
	const max = 100;
	const min = 1;
	let number = Math.round(Math.random() * (max - min + 1) + min);
	console.log('This is ' + number);
	return number;
}
function howClose(randNum, inputNum) {
	if (inputNum >= randNum - 3 && inputNum <= randNum + 3){
		alert('Дуже гаряче');
		console.log('Or +- 3');
	} else if (inputNum >= randNum - 7 && inputNum <= randNum + 7) {
		alert('Гаряче');
		console.log('Or +- 7');
	} else if (inputNum >= randNum - 13 && inputNum <= randNum + 13) {
		alert('Тепло');
		console.log('Or +- 13');
	} else if (inputNum >= randNum - 17 && inputNum <= randNum + 17) {
		alert('Прохолодно');
		console.log('Or +- 17');
	} else if (inputNum >= randNum - 23 && inputNum <= randNum + 23) {
		alert('Холоднувато');
		console.log('Or +- 23');
	} else if (inputNum >= randNum - 27 && inputNum <= randNum + 27) {
		alert('Холодно');
		console.log('Or +- 27');
	} else {
		alert('Дуже холодно');
		console.log('Un');
	}
}
function sample (count, inputNum) {
	let date = new Date();
	console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Спроба ${count}: число ${inputNum} - 'не вірно'!`);
}
function run () {
	console.log('START');
	let exit = true;
	let count = 0;
	let number = generateNumber();
	let start = +prompt('Щоб почати натисніть 1',0);
	if(start == 1){
		while (exit) {
			count++;
			let inputNumber = +prompt ('Вгадай число від 1 до 100, щоб вийти -1.');
			if (number == inputNumber) {
				alert(`Ви вгадали число ${number}! Кількість спроб : ${count}.`);
				exit = false;
			} else if (inputNumber == -1) {
				console.log('END');
				exit = false;
			} else {
				howClose(number, inputNumber);
				sample(count, inputNumber);
			}
		}
	} else {
		console.log('END')
	}
}
run();