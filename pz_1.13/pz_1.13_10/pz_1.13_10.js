// obj
let PowerPlant = {
	countEnergy : 0,
	money : 300,
	isDay: true,
	work () {
		this.countEnergy += Math.round(Math.random() * (100 - 1) + 1);
	},
}
let SolarPanel =  {
	work () {
		if(this.__proto__.isDay){
			this.__proto__.countEnergy += Math.round(Math.random() * (5 - 1) + 1); 
		}
	}
}
let House = {
	countFlat: 22,
	consumeCount : 0,
	consume () {
		if(this.__proto__.isDay){
			this.__proto__.countEnergy -= (this.countFlat * 4);
			this.consumeCount = (this.countFlat * 4);
		} else {
			this.__proto__.countEnergy -= (this.countFlat * 1);
			this.consumeCount = (this.countFlat * 1);
		}
	}
}
let Line = {
	power: 200,
	price: 3.14,
}

// func
function initial () {
	SolarPanel.__proto__ = PowerPlant;
	House.__proto__ = PowerPlant;
	Line.__proto__ = PowerPlant;
}

function run(){
	let buy = 0;
	let cell = 0;
	let dayMessage = '';

	// initialization
	initial();
	// menu
	let menu = +prompt('1 - Електрична станція працює 12 годин | 2 - Сонячні панелі працюють 12 годин | 3 - Працюють сонячні панелі і електростанція');

	switch(menu){
		case 1:
			PowerPlant.work();
			console.log(`За 12 годин станція відпрацювала : ${PowerPlant.countEnergy} одиниць енергії`);
			break;
		case 2:
			SolarPanel.work();
			console.log(`За 12 годин сонячна панель відпрацювала : ${PowerPlant.countEnergy} одиниць енергії`);
			break;
		case 3:
			SolarPanel.work();
			PowerPlant.work();
			console.log(`За 12 годин сонячна панель і електростаніця відпрацювала : ${PowerPlant.countEnergy} одиниць енергії`);
			break;
	}

	House.consume();
	
	console.log(`За останні 12 годин будинок з ${House.countFlat} квартирами витратив ${House.consumeCount} одиниць енергії`);
	console.log(`Остача ${PowerPlant.countEnergy}`)
	
	if(House.consumeCount < Line.power){
		if ( PowerPlant.countEnergy < 0){
			buy = Math.abs(PowerPlant.countEnergy) * Line.price; 
			PowerPlant.money -= buy;
			console.log(`Для закупки ${Math.abs(PowerPlant.countEnergy)} одиниць енергії витратили ${buy} гривень`);
		} else {
			cell = PowerPlant.countEnergy * Line.price;
			PowerPlant.money += cell; 
			console.log(`Ми продали ${PowerPlant.countEnergy} одиниць енергії за ${cell} гривень`);
		}
	} else {
		console.log('Невистачає потужності лінії');
	}
	
	console.log(`Бюджет ${PowerPlant.money}`);

	dayMessage = (PowerPlant.isDay !== true)? 'Ніч закінчилась': 'День закінчився';
	if(PowerPlant.isDay === true){
		PowerPlant.isDay = false;
	} else {
		PowerPlant.isDay = true;
	}
	console.log(dayMessage);
}

run();

