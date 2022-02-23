function timeDay (date){
	let dayString ='';
	const day = date.getDay();
	switch(day){
		case 0:
			dayString = 'Неділя';
			break;
		case 1:
			dayString = 'Понеділок';
			break;
		case 2:
			dayString = 'Вівторок';
			break;
		case 3:
			dayString = 'Середа';
			break;
		case 4:
			dayString = 'Четвер';
			break;
		case 5:
			dayString = 'П`ятниця';
			break;
		case 6:
			dayString = 'Субота';
			break;
	}
	return dayString;
}
function timeMonth (date){
	let monthString = '';
	const month = date.getMonth();
	switch (month){
		case 0:
			monthString = 'січеня';
		break;
		case 1:
			monthString = 'лютого';
		break;
		case 2:
			monthString = 'березеня';
		break;
		case 3:
			monthString = 'квітеня';
		break;
		case 4:
			monthString = 'травеня';
		break;
		case 5:
			monthString = 'червеня';
		break;
		case 6:
			monthString = 'липеня';
		break;
		case 7:
			monthString = 'серпеня';
		break;
		case 8:
			monthString = 'вересня';
		break;
		case 9:
			monthString = 'жовтеня';
		break;
		case 10:
			monthString = 'листопада';
		break;
		case 11:
			monthString = 'груденя';
		break;
	}
	return monthString;
}
let date = new Date();
let timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${timeDay(date)} , ${date.getDate()} ${timeMonth(date)} ${date.getFullYear()} року`;
console.log(timeString);