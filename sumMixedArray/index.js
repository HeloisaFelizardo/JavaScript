/* Dada uma matriz de inteiros como strings e números, retorne a soma dos valores da matriz como se todos fossem números.

Retorne sua resposta como um número. */

const sumMix = (x) =>
	String(x)
		.split(',')
		.map((num) => Number(num))
		.reduce((a, b) => a + b);

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
