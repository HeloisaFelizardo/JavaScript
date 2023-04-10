/* Dada uma matriz de inteiros, sua solução deve encontrar o menor inteiro.

Por exemplo:

Dado que [34, 15, 88, 2]sua solução retornará2
Dado que [34, -345, -1, 100]sua solução retornará-345
Você pode assumir, para o propósito deste kata, que o array fornecido não estará vazio.

 */

const findSmallestInt = (args) => {
	args.sort((a, b) => a - b);
	return args[0];
};

console.log(
	findSmallestInt([78, 56, 232, 12, 8]),
	8,
	'Should return the smallest int 8'
);
console.log(
	findSmallestInt([78, 56, 232, 12, 18]),
	12,
	'Should return the smallest int 12'
);
console.log(
	findSmallestInt([78, 56, 232, 412, 228]),
	56,
	'Should return the smallest int 56'
);
console.log(
	findSmallestInt([78, 56, 232, 12, 0]),
	0,
	'Should return the smallest int 0'
);
console.log(
	findSmallestInt([1, 56, 232, 12, 8]),
	1,
	'Should return the smallest int 1'
);
