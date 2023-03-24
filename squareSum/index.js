/* Complete a função de soma quadrada de modo que eleve ao quadrado cada número passado para ela e, em seguida, some os resultados.

For example, for [1, 2, 2] it should return 9 because 
 */

/* const squareSum = (numbers) => {
	let sum = 0;

	numbers.forEach((number) => {
		let sqrt = Math.pow(number, 2);
		sum += sqrt;
	});
	return sum;
};
 */
//Alternativa

const squareSum = (numbers) => numbers.reduce((sum, n) => n * n + sum, 0);

/* console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0); */

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
console.log(squareSum([1, 2, 2]));
