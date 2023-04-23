/* Escreva uma função para saber se o argumento é divisível por 5 */

const divisivel = (numero) =>
	numero % 5 === 0
		? `O número ${numero} é divisível por 5`
		: `O número ${numero} não é divisível por 5`;

console.log(divisivel(15));
console.log(divisivel(13));
