/* Para encontrar o volume (centímetros cúbicos) de um paralelepípedo, você usa a fórmula:

volume = Length * Width * Height

Mas alguém se esqueceu de usar a manutenção de registros adequada, então só temos o volume e o comprimento de um único lado!

Cabe a você descobrir se o paralelepípedo tem lados iguais (= é um cubo).

Retorne truese o paralelepípedo puder ter lados iguais, retorne falsecaso contrário.

Retorne falsetambém para números inválidos (por exemplo, volume ou lado é menor ou igual a 0).

Nota: o lado será um número inteiro */
const cubeChecker = (volume, side) =>
	volume > 0 && volume === Math.pow(side, 3);

console.log(cubeChecker(56.3, 1), false);
console.log(cubeChecker(-1, 2), false);
console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8, -2), false);
console.log(cubeChecker(0, 0), false);
console.log(cubeChecker(1, 5), false);
console.log(cubeChecker(125, 5), true);
console.log(cubeChecker(125, -5), false);
