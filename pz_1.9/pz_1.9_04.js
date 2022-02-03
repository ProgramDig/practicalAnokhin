let inputNum = prompt('Введіть кількість етажів піраміди.', [1]);
function triangleStar(num){
	let star = '';
	for(let i = 0; i < num; i++){
		star += '*'; 
		console.log(star);
	}
}
function piramideStar(num){
	let star = "";
	for(let i = 1; i <= num; i++) {
		for(let j = 1; j <= num - i; j++) {
			star += " ";
		 }
		 for(let k = num - i + 1; k < num + i; k++) {
			star += "*";
		 }
		 star += "\n";
}
	return star;
}
function diamondStar(val){
	doubleit = val*2;
	document.write('<center>');
	document.write('function diamond('+val+')<br>');
	for(i=0; i<doubleit; i++){
		 if (i < val){
			  for(j=0; j<i; j++){
					document.write('*');
			  }
		 }
		 if (i >= val){
			  for(j=doubleit; j>i; j--){
					document.write('*');
			  }
		 }

		 document.write('<br>');
	}
	document.write('</center>');
}
console.log(diamondStar(4))