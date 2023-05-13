/* Nesta pequena tarefa, você recebe uma sequência de números separados por espaços e deve retornar o número mais alto e o mais baixo.

Exemplos
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notas
Todos os números são válidos Int32, não há necessidade de validá-los.
Sempre haverá pelo menos um número na string de entrada.
A string de saída deve ser dois números separados por um único espaço, e o número mais alto é o primeiro. */

const highAndLow = (numbers) => {
	numbers = numbers.split(' ');
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

console.log(highAndLow('1 2 3'));
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
