/* Some todos os números de um determinado array ( cq. list ), exceto o elemento mais alto e o mais baixo ( por valor, não por índice! ).

O elemento mais alto ou mais baixo, respectivamente, é um único elemento em cada borda, mesmo que haja mais de um com o mesmo valor.

Cuide da validação de entrada.

Exemplo
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
validação de entrada
Se um valor vazio ( null, None, Nothingetc. ) for fornecido em vez de um array, ou o array fornecido for uma lista vazia ou uma lista com apenas um 1elemento, retorne 0. */

const sumArray = (arr) => {
	if (arr && arr.length > 2) {
		arr.sort((a, b) => a - b).pop();
		arr.shift();
		return arr.reduce((a, b) => a + b);
	} else {
		return 0;
	}
};

/* const sumArray = (arr) =>
	arr
		? arr
				.sort((a, b) => a - b)
				.slice(1, -1)
				.reduce((a, b) => a + b, 0)
		: 0; */

console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);
