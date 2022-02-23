class Random {
	static nextDouble (low = 0.1, high = 5.0) {
		return Math.random() * (high - low) + low;
	}
	static nextInt (low = 0, high = 5) {
		return Math.round((Math.random() * (high - low) + low));
	}
	static nextElement (array = [0,1,2,3]) {
		return array[Math.round(Math.random() * ((array.length - 1) - 0) + 0)];
	}
}
console.log(Random.nextDouble());
console.log(Random.nextInt());
console.log(Random.nextElement());