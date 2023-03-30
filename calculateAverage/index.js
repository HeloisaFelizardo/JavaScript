/* Escreva uma função que calcule a média dos números em uma determinada lista.

Nota: Arrays vazios devem retornar 0. */

const findAverage = (array) => {
	return array.length === 0
		? 0
		: array.reduce((a, b) => a + b) / array.length;
};

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
console.log(findAverage([]), 0);
