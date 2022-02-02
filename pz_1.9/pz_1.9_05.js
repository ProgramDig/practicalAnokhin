let numb = 5000;

function divisionHalf(num){
	let index = 0;
	let count = 0;

	while(index !== -1){
		num /= 2;
		count++;
		if(num < 50){
			console.log(`${num} stop, count: ${count}`);
			index = -1;
		}
	}
}

divisionHalf(numb);