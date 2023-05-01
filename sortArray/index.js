/* Você receberá uma matriz de números. Você deve classificar os números ímpares em ordem crescente, deixando os números pares em suas posições originais.

Exemplos
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

const sortArray = (array) =>
	array
		.filter((num) => num % 2)
		.sort((a, b) => b - a)
		.map((num) => (num % 2 ? oddList.pop() : num));

/* console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []); */

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]), []);
