let array = [];

const min = -10;
const max = 20;
const num = 5;

for(let i = 0; i < num; i++){
	array[i] = new Array();
	for(let j = 0; j < num; j++){
		array[i][j] = Math.floor(Math.random() * max + min);
	}
}


 for(let i = 0; i < num; i++){
 	for(let j = 0; j < num; j++){
 		if(i === j){
 			if (array[i][j] > 0){
 				array[i][j] = 1;
 			} else if (array[i][j] < 0) {
 				array[i][j] = 0;
 			} else {
 				array[i][j] = 0;
 			}
 		}
 	}
 }

 array.forEach(e => console.log(e));