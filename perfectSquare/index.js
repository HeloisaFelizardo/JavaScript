/* Você deve conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO?

Complete o findNextSquaremétodo que encontra o próximo quadrado perfeito integral após aquele passado como parâmetro. Lembre-se de que um quadrado perfeito integral é um inteiro n tal que sqrt(n) também é um inteiro.

Se o parâmetro em si não for um quadrado perfeito, ele -1deve ser retornado. Você pode assumir que o parâmetro não é negativo.

Exemplos: (Entrada --> Saída)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

const findNextSquare = (sq) => {
	// Return the next square if sq is a perfect square, -1 otherwise
	var squareRoot = Math.sqrt(sq);
	return squareRoot % 1 === 0 ? Math.pow(squareRoot + 1, 2) : -1;
};

/* console.log(findNextSquare(121), 144, 'Wrong output for 121');
console.log(findNextSquare(625), 676, 'Wrong output for 625');
console.log(findNextSquare(319225), 320356, 'Wrong output for 319225');
console.log(
	findNextSquare(15241383936),
	15241630849,
	'Wrong output for 15241383936'
);
console.log(findNextSquare(155), -1, 'Wrong output for 155');
console.log(findNextSquare(342786627), -1, 'Wrong output for 342786627'); */

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
