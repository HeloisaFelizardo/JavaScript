/* Crie uma função javascript que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.  */

function calcularValorGasto(km, precoCombustivel) {
	// Calcula o valor gasto em reais para percorrer a distância em km
	const consumoMedio = 12; // km/L (exemplo)
	const precoLitro = precoCombustivel; // R$/L
	const litrosUsados = km / consumoMedio;
	const valorGasto = litrosUsados * precoLitro;

	// Retorna o valor gasto em reais, com duas casas decimais
	return valorGasto.toFixed(2);
}

/* Para usar a função, basta chamar calcularValorGasto passando a quantidade de quilômetros e o preço do combustível como argumentos: */
const kmPercorridos = 100;
const precoDoLitro = 5.0;
const valorGasto = calcularValorGasto(kmPercorridos, precoDoLitro);

console.log(
	`O valor gasto para percorrer ${kmPercorridos} km é de R$${valorGasto}`
);
