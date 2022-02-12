class Task {
	// name
	// description
	// dateStart
	// dateFinish
	// subtaskArray
	constructor(name, description, dateStart, dateFinish, subtaskArray){
		this.name = name;
		this.description = description;
		this.dateStart = dateStart;
		this.dateFinish = dateFinish;
		this.subtaskArray = subtaskArray;
	}
}
class ExecutedTask extends Task {
	// perOfPerform
	// isDone
	constructor(name, description, dateStart, dateFinish, subtaskArray, perOfPerform, isDone){
		super(name, description, dateStart, dateFinish, subtaskArray);
		this.perOfPerform = perOfPerform;
		this.isDone = isDone;
	}
}
let secondTask = new Task ('Read book', 'Read Lorem ipsum', '21.02.2020','21.02.2020',[])
let firstTask = new ExecutedTask('Go to School', 'Go on street', '21.02.2020','21.02.2020',[secondTask],70,false);
console.table(firstTask);