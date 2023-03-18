/* Sua tarefa é escrever uma função que retorne a soma das seguintes séries até o enésimo termo (parâmetro).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Regras:
Você precisa arredondar a resposta para 2 casas decimais e retorná-la como String.

Se o valor fornecido for 0, ele deve retornar 0,00

Você receberá apenas números naturais como argumentos.

Exemplos: (Entrada --> Saída)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

function SeriesSum(n) {
	// Happy Coding ^_^
	var sum = 0;
	for (var i = 0; i < n; i++) {
		sum += 1 / (3 * i + 1);
	}
	return sum.toFixed(2);
}

console.log(SeriesSum(2), '1.25');

console.log(SeriesSum(4), '1.49');
