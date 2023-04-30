/* Complete a função de forma que ela retorne a soma dos numbersque recebe como parâmetro. */

/**
 * @param {number[]} numbers
 */
const sumNumbers = (numbers) => {
	return numbers.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
};

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])); // 60
console.log(sumNumbers([2, 4, 2, 10])); // 18
