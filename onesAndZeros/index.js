/* Dada uma matriz de uns e zeros, converta o valor binário equivalente em um número inteiro.

Por exemplo: [0, 0, 0, 1]é tratado como 0001sendo a representação binária de 1.

Exemplos:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
No entanto, as matrizes podem ter comprimentos variados, não apenas limitados a 4. */

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
