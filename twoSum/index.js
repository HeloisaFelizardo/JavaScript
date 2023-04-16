/* Escreva uma função que receba uma matriz de números (inteiros para os testes) e um número de destino. Ele deve encontrar dois itens diferentes na matriz que, quando somados, fornecem o valor de destino. Os índices desses itens devem então ser retornados em uma tupla/lista (dependendo do seu idioma) assim: (index1, index2).

Para os propósitos deste kata, alguns testes podem ter múltiplas respostas; quaisquer soluções válidas serão aceitas.

A entrada sempre será válida (os números serão uma matriz de comprimento 2 ou maior e todos os itens serão números; o destino sempre será a soma de dois itens diferentes dessa matriz).

Baseado em: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0] */

function twoSum(numbers, target) {
	for (var i = 0; i < numbers.length - 1; i++) {
		for (var j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) return [i, j];
		}
	}
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 4));
