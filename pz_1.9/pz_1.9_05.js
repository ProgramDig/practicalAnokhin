let numb = 5000;

function divisionHalf(num){
	let count = 0;

	while(count !== -1){
		num /= 2;
		if(num < 50){
			console.log(`${num} stop`);
			count = -1;
		}
	}
}

divisionHalf(numb);