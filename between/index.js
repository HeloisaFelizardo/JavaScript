/* Complete a função que recebe dois inteiros ( a, b, onde a < b) e retorne um array de todos os inteiros entre os parâmetros de entrada, incluindo eles.

Por exemplo:

a = 1
b = 4
--> [1, 2, 3, 4] */

const between = (a, b) => {
	const array = [];

	for (let i = a; i <= b; i++) {
		array.push(i);
	}
	return array;
};

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);
