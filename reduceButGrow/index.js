/* Dada uma matriz não vazia de números inteiros, retorne o resultado da multiplicação dos valores em ordem. Exemplo:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
