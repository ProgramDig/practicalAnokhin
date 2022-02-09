const Add = (firstNum ,secondNum ) => firstNum + secondNum;
const Sub = (firstNum ,secondNum ) => firstNum - secondNum;
const Mul = (firstNum ,secondNum) => firstNum * secondNum;
const Div = (firstNum ,secondNum) => (secondNum !== 0)? firstNum / secondNum : 0;
const Calc = (firstNum ,secondNum, mathFunc) => mathFunc(firstNum,secondNum);
console.log(Calc(3,5,Mul));