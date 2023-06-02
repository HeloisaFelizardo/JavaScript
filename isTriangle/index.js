/* Implemente uma função que aceite 3 valores inteiros a, b, c. A função deve retornar true se um triângulo puder ser construído com os lados de determinado comprimento e false em qualquer outro caso.

(Neste caso, todos os triângulos devem ter superfície maior que 0 para serem aceitos).

 */

function isTriangle(a, b, c) {
	return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
