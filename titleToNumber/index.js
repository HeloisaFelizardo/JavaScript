/*Escreva uma função

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(dependendo do idioma)

que, dado um título de coluna como aparece em uma planilha do Excel, retorna o número da coluna correspondente. Todos os títulos das colunas estarão em letras maiúsculas.

Exemplos:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
Note for Clojure:
Don't use Java Math/pow (even with bigint) because there is a loss of precision 
when the length of "title" is growing. 
Write your own function "exp [x n]". */

function titleToNumber(title) {
	//code me
	//return title.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);

	let caracteres = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		mode = caracteres.length - 1,
		number = 0;
	for (let i = 0; i < title.length; i++) {
		number = number * mode + caracteres.indexOf(title[i]);
	}
	return number;

	// const alpha = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	//const titleToNumber = t => t.length == 0 ? 0 : alpha.indexOf(t.charAt(0)) * Math.pow(26, t.length - 1) + titleToNumber(t.slice(1));
}

console.log(titleToNumber('A'), 1);
console.log(titleToNumber('Z'), 26);
console.log(titleToNumber('AA'), 27);
console.log(titleToNumber('AZ'), 52);
console.log(titleToNumber('BA'), 53);
console.log(titleToNumber('CODEWARS'), 28779382963);
