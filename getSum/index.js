/* Dados dois inteiros a e b, que podem ser positivos ou negativos, encontre a soma de todos os inteiros entre e incluindo-os e retorne-a. Se os dois números forem iguais, retorne a ou b.

Nota: a e b não são encomendados!

Exemplos (a, b) --> saída (explicação)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Sua função deve retornar apenas um número, não a explicação sobre como você obtém esse número. */

const getSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
};

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(2, 2), 2);
