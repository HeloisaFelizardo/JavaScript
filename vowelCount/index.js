/*  Retorna o número (contagem) de vogais na string fornecida.

Consideraremos a, e, i, o, ucomo vogais para este Kata (mas não y).

A string de entrada consistirá apenas em letras minúsculas e/ou espaços.*/

const getCount = (str) => {
	return (str.match(/[aeiou]/gi) || []).length;
};
console.log(getCount('abracadabra'), 5);
console.log(getCount('abracadabra abracadabra'), 10);
console.log(getCount('ABRACADABRA ABRACADABRA'), 0);
