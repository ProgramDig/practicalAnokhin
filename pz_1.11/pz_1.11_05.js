const isPrimeNumber = (number) => {
	let start = 2;
	const limit = Math.sqrt(number);
	while(start <= limit){
		if(number % start++ < 1){
			return false;
		}
	}
	return true;
};
const isPositive = (number) => (number > 0)? true: false;
const isMul = (number) => (number % (2, 5, 3, 6, 9) === 0)? true: false; 
const conditionNumber = (number, isMul, isPosit, isPrime) =>{
	let result = `Number ${number}:`;
	if (isMul (number)) {
		result += ('\nDivided by 2, 5, 3, 6, 9 without remainder.');
	} else {
		result += ("\nDivided't by 2, 5, 3, 6, 9 without remainder.")
	}
	if (isPrime (number)) {
		result += ('\nIs a prime number.');
	} else {
		result += ("\nIs't a prime number.");
	}
	if (isPosit (number)) {
		result += ('\nIs a positive number.');
	} else {
		result += ("\nIs't a positive number.")
	}
	return result
}

const str = conditionNumber(90,isMul,isPositive,isPrimeNumber);

console.log(str);