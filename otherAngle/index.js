/* Você recebe dois ângulos internos (em graus) de um triângulo.

Escreva uma função para retornar o 3º.

Nota: apenas inteiros positivos serão testados.

https://en.wikipedia.org/wiki/Triângulo

 */

const otherAngle = (a, b) => 180 - (a + b);

console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);
