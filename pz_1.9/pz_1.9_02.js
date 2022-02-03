let count = 0;
let answer = "";
do{
	if (count === 0){
		answer = `${count} - це нуль.`;
	} else if (count % 2 === 1){
		answer = `${count} - парне число.`;
	} else {
		answer = `${count} - непарне число.`;
	}
	console.log(answer);
	count++;
} while(count <= 20);