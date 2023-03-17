/**
 * Complete a função sumOddNumbersde forma que ela retorne a soma de todos os números ímpares do numbersparâmetro que recebe.
A função também deve funcionar para números negativos.
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		if (number % 2 !== 0) {
			sum = sum + number;
		}
	});
	return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2
