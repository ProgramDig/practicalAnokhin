function numToObj (number) {
	let array = {};
	if (number > 1 && number <= 9999){
		array = number.toString().split('').reverse().map((current, index) => {
			switch(index){
				case 0: 
				current +=  ' одиниці';
				break;
				case 1: 
				current += ' десятки';
				break;
				case 2: 
				current += ' сотні';
				break;
				case 3: 
				current += ' тисячі';
				break;
			}
			return current;
		});
	} else {
		console.log('Невірне число');
	}	
}
const number = 3441;
console.log(numToObj(number));