/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const spendingGasoline = (precoLitro, kmPorLitro, distanciaKm) => {
	let litrosConsumidos = distanciaKm / kmPorLitro;
	let valorGasto = precoLitro * litrosConsumidos;
	return valorGasto.toFixed(2);
};

console.log(spendingGasoline(5.36, 10, 25));
console.log(spendingGasoline(5.79, 10, 100));
