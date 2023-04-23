/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const spendingGasoline = (
	precoEtanol,
	precoGasolina,
	tipoCombustivel,
	gastoMedioPorLitro,
	distanciaKm
) => {
	let litrosConsumidos = distanciaKm / gastoMedioPorLitro;
	let valorGasto;

	return tipoCombustivel === 'gasolina'
		? (valorGasto = precoGasolina * litrosConsumidos).toFixed(2)
		: (valorGasto = precoEtanol * litrosConsumidos).toFixed(2);
};

console.log(
	spendingGasoline(5.79, 6.66, 'gasolina', 10, 100),
	'Gasto com Gasolina'
);
console.log(
	spendingGasoline(5.79, 6.66, 'etanol', 10, 100),
	'Gasto com Etanol'
);
