/* Escreva um programa que encontre a soma de todos os números de 1 a num. O número será sempre um inteiro positivo maior que 0.

Por exemplo (Entrada -> Saída) :

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */

var summation = function (num) {
	// Code here[
	let result = 0;
	for (let i = 1; i <= num; i++) {
		result += i;
	}
	return result;
};

console.log(summation(2), 3);
console.log(summation(8), 36);
