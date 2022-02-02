
do{
	let count = 0;

	switch(count){
		case(count % 2 === 1):
			console.log(`${count} - парне число.`);
		break;
		case(count % 2 !== 1):
			console.log(`${count} - непарне число.`);
		break;
		case(count === 0):
			console.log(`${count} - це нуль.`);
		break;
	}
	count++;
} while(count <= 20);