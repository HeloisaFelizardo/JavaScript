/* Como parte deste Kata, você precisa criar uma função que, quando fornecida com um trio, retorne o índice do elemento numérico que está entre os outros dois elementos.

A entrada para a função será uma matriz de três números distintos (Haskell: uma tupla).

Por exemplo:

gimme([2, 3, 1]) => 0
2 é o número que se encaixa entre 1 e 3 e o índice de 2 na matriz de entrada é 0 .

Outro exemplo (só para ter certeza de que está claro):

gimme([5, 10, 14]) => 1
10 é o número que se encaixa entre 5 e 14 e o índice de 10 na matriz de entrada é 1 . */
const gimme = (triplet) =>
	triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

console.log(gimme([2, 3, 1]));
console.log(gimme([2, 3, 1], 0));
console.log(gimme([5, 10, 14], 1));
console.log(gimme([2.1, 3.2, 1.4], 0));
console.log(gimme([5.9, 10.4, 14.2], 1));
console.log(gimme([-2, -3, -1], 0));
console.log(gimme([-5, -10, -14], 1));
console.log(gimme([-2, -3.2, 1], 0));
console.log(gimme([-5.2, -10.6, 14], 0));
