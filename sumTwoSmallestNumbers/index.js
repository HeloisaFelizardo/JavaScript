/* Crie uma função que retorne a soma dos dois números positivos mais baixos, dada uma matriz de no mínimo 4 inteiros positivos. Nenhum float ou inteiro não positivo será passado.

Por exemplo, quando um array é passado como [19, 5, 42, 2, 77], a saída deve ser 7.

[10, 343445353, 3453445, 3453545353453]deveria retornar 3453455. */
function sumTwoSmallestNumbers(numbers) {
	//Code here
	numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, 'Sum should be 13');
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, 'Sum should be 6');
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, 'Sum should be 10');
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, 'Sum should be 24');
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, 'Sum should be 16');
