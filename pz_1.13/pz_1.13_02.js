const objNum = {
	0:'8',
	1:'7',
	2:'6',
	3:'5',
	4:'4',
	5:'3',
	6:'2',
	7:'1'
};
const objChar = {
	0:' ',
	1:'A',
	2:'B',
	3:'C',
	4:'D',
	5:'E',
	6:'F',
	7:'G',
	8:'H'
};
function genChessBoard (heigth = 8, weigth = 8) {
	let board = '\n';
	let bool = false;
	for(let i = 0; i < heigth; i++){
		board += objNum[i] + ' ';
		for(let j = 0; j < weigth; j++){
			if(i % 2 === 1){
				if(bool){
					board += '# ';		
					bool = false;	
				} else {
					board += '@ ';
					bool = true;
				}	
			} else {
				if(bool){
					board += '@ ';		
					bool = false;	
				} else {
					board += '# ';
					bool = true;
				}
			}
		}
		board += '\n';
	}
	for(let i = 0; i <= weigth; i++){
		board += objChar[i] + ' ';
	}
	return board;
}
console.log(genChessBoard()); // max board h = 8, w = 8 