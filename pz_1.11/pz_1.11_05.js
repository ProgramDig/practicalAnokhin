const isPrimeNumber = (number) => {
	let start = 2;
	const limit = Math.sqrt(number);
	while(start <= limit){
		if(number % start++ < 1){
			return false;
		}
	}
	return number > 1;
};

console.log(isPrimeNumber(7));