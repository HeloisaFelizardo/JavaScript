/* Crie uma função com dois argumentos que retornará uma matriz dos primeiros nmúltiplos de x.

Suponha que o número fornecido e o número de vezes a contar serão números positivos maiores que 0.

Retorne os resultados como uma matriz ou lista (dependendo do idioma).

Exemplos
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */
const countBy = (x, n) => {
	let z = [];

	for (let i = 1; i <= n; i++) {
		z.push(x * i);
	}

	return z;
};

/* console.log(
	countBy(1, 10),
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	'Array does not match'
); */
//console.log(countBy(2, 5), [2, 4, 6, 8, 10], 'Array does not match');

console.log(countBy(1, 10));

console.log(countBy(2, 5));
