let day = prompt('Введіть число від 1 до 7 відповідно до днів тижня', [1]);
function howDay(dayNum){
	let dayStr = '';
	switch(dayNum){
		case 1: 
			dayStr = 'Понеділок';
			break;
		case 2: 
			dayStr = 'Вівторок';
			break;
		case 3: 
			dayStr = 'Середа';
			break;
		case 4: 
			dayStr = 'Четверг';
			break;
		case 5: 
			dayStr = "П'ятниця";
			break;
		case 6: 
			dayStr = 'Субота';
			break;
		case 7: 
			dayStr = 'Неділя';
			break;
		default:
			dayStr = 'Невідомий день';
			break;
	}
	return dayStr;
}
alert(howDay(Number(day)));