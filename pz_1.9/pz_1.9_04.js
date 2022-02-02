let inputNum = prompt('Введіть кількість етажів піраміди.', [1]);

function triangleStar(num){
	let star = '';
	for(let i = 0; i < num; i++){
		star += '*'; 
		console.log(star);
	}
}

function pyramidStar(num) {
	let star = "";
	for(let i = 1; i <= num; i++) {
		if(i<4){

	  for(let j = 1; j <= num - i; j++) {
		 star += " ";
	  }
	  for(let k = num - i + 1; k < num + i; k++) {
		 star += "*";
	  }
	  star += "\n";
	}
	else if(i>=4){
		
		for(let j = 1; j <= num - i; j++) {
			star += " ";
		 }
		 for(let k = num - i + 1; k < num + i; k++) {
			star += "*";
		 }
		 star += "\n";
	}
	else{
		break;
	}

	}

	return star;
}

console.log(pyramidStar(Number(inputNum)));

// triangleStar(inputNum);
