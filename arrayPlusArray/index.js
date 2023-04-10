/* Sou novo em codificação e agora quero obter a soma de dois arrays... Na verdade, a soma de todos os seus elementos. Agradeço sua ajuda.

PS Cada array inclui apenas números inteiros. A saída também é um número. */

const arrayPlusArray = (arr1, arr2) =>
	arr1.concat(arr2).reduce((a, b) => a + b);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
