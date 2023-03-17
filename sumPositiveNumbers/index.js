/**
 * Complete a função sumPositiveNumbersde forma que ela retorne a soma de todos os números positivos do numbersparâmetro que recebe.
Este desafio irá ajudá-lo a combinar alguns dos conhecimentos adquiridos neste curso. Tome seu tempo e cometa o máximo de erros possível!
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
	let sum = 0;

	numbers.forEach((number) => {
		if (number > 0) {
			sum = sum + number;
		}
	});
	return sum;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
