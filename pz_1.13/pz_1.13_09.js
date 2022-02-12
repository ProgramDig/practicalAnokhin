class Worker {
	// name
	// surname
	// rate 
	// days
	constructor (name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	}
	getSalary(){
		return this.rate * this.days;
	}
}
const person = new Worker('Alex','Tytok',65 ,20 );
console.log(person.getSalary());