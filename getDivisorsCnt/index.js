/* Conte o número de divisores de um inteiro positivo n.

Testes aleatórios vão até n = 500000.

Exemplos (entrada --> saída)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Observe que você deve retornar apenas um número, a contagem de divisores. Os números entre parênteses são mostrados apenas para você ver quais números são contados em cada caso. */

function getDivisorsCnt(n) {
	let div = 0;
	for (let i = 0; i <= n; i++) {
		if (n % i == 0) div++;
	}
	return div;
	// todo
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
