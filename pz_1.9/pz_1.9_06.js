let month = prompt('Введіть порядок місяця від 1 до 12', [1]);

function howMonth(num){
	let month;
	let season;
	switch(num){
		case 1: 
			month = 'Січень';
		case 2: 
			month = 'Лютий';
		case 12: 
			month = 'Грудень';
			season = 'зима'
			break;
		case 3: 
			month = 'Березень';
		case 4: 
			month = 'Квітень';
		case 5: 
			month = 'Травень';
			season = 'весна';
			break;
		case 6: 
			month = 'Червень';
		case 7: 
			month = 'Липень';
		case 8: 
			month = 'Серпень';
			season = 'Літо';
			break;
		case 9: 
			month = 'Верень';
		case 10: 
			month = 'Жовтень';
		case 11: 
			month = 'Листопад';
			season = 'осінь';
			break;
		default: 
			month = 'Такого місяця не існує';
			season = 'Такого сезона не існує'
			break;
	}
	return month + " " + season;
}

alert(howMonth(Number(month)));