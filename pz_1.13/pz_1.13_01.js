const weekObj = { // obj
	ua:{
		1:'Понеділок',
		2:'Вівторок',
		3:'Середа',
		4:'Четвер',
		5:"П'ятниця",
		6:'Субота',
		7:'Неділя'
	},
	en:{
		1:'Sunday',
		2:'Monday',
		3:'Tuesday',
		4:'Wednesday',
		5:"Thursday",
		6:'Friday',
		7:'Friday'
	}
};
function inputLanguage (result) { // language
	const message = 'Не вірно введена мова';
	result = prompt ("Оберіть мову [ua|en]",'ua');
	
	switch (result) {
		case 'ua': 
			return result;
		case 'en':
			return result;
		default :
			alert(message);
			inputLanguage (result);
	};	
}
function inputNum (inputMessage, inputLang) { // Number
	let message = '';
	const dayNum = prompt(inputMessage,1);
	if (dayNum >= 1 && dayNum <= 7){
		return dayNum;
	} else {
		switch (inputLang) {
			case 'ua' :
				message = 'Не вірно введене число';
				break;
			case 'en' :
				message = 'The number entered is incorrect';
				break;
		}
		alert(message);
		inputNum(inputLang);
	}
}
function choiceOfDay(inputLang, number){ // Day
	const day = weekObj[inputLang][number];
	alert(day);
}
function weekDay () { // main func
	let inputLang = inputLanguage();
	let message = '';
	switch (inputLang) {
		case 'ua' :
			message = 'Введіть номер дня тижня від 1 до 7?';
			break;
		case 'en' :
			message = 'Enter the day number of the week (from 1 to 7)?';
			break;
	}
	const number = inputNum(message, inputLang);
	choiceOfDay(inputLang, number);
}
weekDay();

