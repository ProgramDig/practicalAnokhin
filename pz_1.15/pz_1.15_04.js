const email = 'lizzylizzy2309@gmail.com';
function correctEmail (email){
	let result = '';
	if (typeof email == 'string'){
		const regExp = /.+@gmail.com/;
		if (regExp.test(email)){
			result = `email : ${email} введено коректно`;
		} else {
			result = `email : ${email} введено не коректно`;
		}
	} else {
		result = `email не є строкою`;
	}
	return result;
}
console.log(correctEmail(email));
