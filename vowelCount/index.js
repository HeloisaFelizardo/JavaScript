/*  Retorna o número (contagem) de vogais na string fornecida.

Consideraremos a, e, i, o, ucomo vogais para este Kata (mas não y).

A string de entrada consistirá apenas em letras minúsculas e/ou espaços.*/

const getCount = (str) => {
	let maiusculas = str.includes('A', 'E', 'I', 'O', 'U');

	return !maiusculas ? (str.match(/[aeiou]/gi) || []).length : false;
};
console.log(getCount('abracadabra'), 5);
console.log(getCount('abracadabra abracadabra'), 5);
console.log(getCount('ABRACADABRA ABRACADABRA'), 5);
