/* Seu trabalho é implementar uma função que retorne os últimos Ddígitos de um inteiro Ncomo uma lista.

Casos especiais:
Se D > (the number of digits of N), retorne todos os dígitos.
Se D <= 0, retorna uma lista vazia.
Exemplos:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7] */

/* function lastDigit(N, D) {
	// Converte N para uma string
	const strN = N.toString();

	// Obtém o índice do primeiro dígito do final que deve ser incluído na lista
	const startIndex = Math.max(strN.length - D, 0);

	// Obtém os últimos D dígitos de N como uma lista de números
	const digitos = [];
	for (let i = startIndex; i < strN.length; i++) {
		digitos.push(parseInt(strN[i]));
	}

	return digitos;
} */

const lastDigit = (n, d) => n.toString().split('').splice(-d, d).map(Number);

/* Esta função recebe dois parâmetros: N, o inteiro original, e D, o número de dígitos finais que devem ser retornados como uma lista.

A primeira linha da função converte o inteiro N para uma string, para que possamos trabalhar com seus dígitos individualmente.

Em seguida, a função calcula o índice do primeiro dígito do final que deve ser incluído na lista. Se o número de dígitos em N for menor ou igual a D, a função começa no primeiro dígito da string (índice 0). Caso contrário, a função começa D dígitos a partir do final da string.

Depois disso, a função itera pelos dígitos restantes de N, começando no índice calculado acima e adicionando cada dígito a uma lista de números.

Por fim, a função retorna a lista de dígitos.

Por exemplo, se você chamar a função com N = 123456 e D = 3, ela retornará [4, 5, 6]. */

console.log(lastDigit(1, 1), [1]);
console.log(lastDigit(123767, 4), [3, 7, 6, 7]);
console.log(lastDigit(0, 1), [0]);
console.log(lastDigit(34625647867585, 10), [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]);
console.log(lastDigit(1234, 0), []);
console.log(lastDigit(24134, -4), []);
console.log(lastDigit(1343, 5), [1, 3, 4, 3]);
