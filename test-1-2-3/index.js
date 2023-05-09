/* Sua equipe está escrevendo um novo editor de texto sofisticado e você foi encarregado de implementar a numeração de linha.

Escreva uma função que receba uma lista de strings e retorne cada linha precedida pelo número correto.

A numeração começa em 1. O formato é n: string. Observe os dois pontos e o espaço entre eles.

Exemplos: (Entrada --> Saída)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */
/* 
const number = function (array) {
	let number = 1;
	let n = '';

	for (let i = 0; i < array.length; i++) {
		n += `${number + i}: ${array[i]},`;
	}

	let result = n.split(',');
	result.pop();
	return result;
}; */

const number = (array) =>
	array.map((element, index) => `${index + 1}: ${element}`);

console.log(number([]));
console.log(number(['a', 'b', 'c']));
