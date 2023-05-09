/* Esta função deve testar se o factor é um fator de base.

Retorne true se for um fator ou false não.

Sobre fatores
Fatores são números que você pode multiplicar para obter outro número.

2 e 3 são fatores de 6 porque:2 * 3 = 6

Você pode encontrar um fator dividindo números. Se o resto for 0, então o número é um fator.
Você pode usar o operador mod ( %) na maioria dos idiomas para verificar um resto
Por exemplo, 2 não é um fator de 7 porque:7 % 2 = 1

Nota: baseé um número não negativo, factoré um número positivo. */

const checkForFactor = (base, factor) => base % factor === 0;

console.log(checkForFactor(10, 2), true);
console.log(checkForFactor(63, 7), true);
console.log(checkForFactor(2450, 5), true);
console.log(checkForFactor(24612, 3), true);
console.log(checkForFactor(9, 2), false);
console.log(checkForFactor(653, 7), false);
console.log(checkForFactor(2453, 5), false);
console.log(checkForFactor(24617, 3), false);
