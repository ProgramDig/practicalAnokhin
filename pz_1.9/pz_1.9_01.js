for(let i = 0;i <= 100; i++){
	if(isPrime(i)){
		console.log(i);
	}
}
function isPrime(num){
	let start = 2;
	const limit = Math.sqrt(num);
	while(start <= limit){
		if(num % start++ < 1){
			return false;
		}
	}
	return num > 1;
}