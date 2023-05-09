/* Nosso time de futebol terminou o campeonato.

Os resultados das partidas de nossa equipe são registrados em uma coleção de strings. Cada partida é representada por uma string no formato "x:y", onde x é o placar do nosso time e y é o placar do nosso adversário.

Por exemplo: ["3:1", "2:2", "0:1", ...]

Os pontos são concedidos para cada partida da seguinte forma:

se x > y: 3 pontos (vitória)
se x < y: 0 pontos (perda)
se x = y: 1 ponto (empate)
Precisamos escrever uma função que pegue essa coleção e retorne o número de pontos que nosso time ( x) obteve no campeonato pelas regras dadas acima.

Notas:

nossa equipe sempre joga 10 partidas no campeonato
0 <= x <= 4
0 <= e <= 4 */

function points(games) {
	let points = 0;
	games.forEach((element) => {
		element[0] > element[2]
			? (points += 3)
			: element[0] < element[2]
			? (points += 0)
			: (points += 1);
	});

	return points;
}

/* const points = (games) =>
	games.reduce((output, current) => {
		output +=
			current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
	}, 0);
 */
console.log(
	points([
		'1:0',
		'2:0',
		'3:0',
		'4:0',
		'2:1',
		'3:1',
		'4:1',
		'3:2',
		'4:2',
		'4:3',
	]),
	30
);
console.log(
	points([
		'1:1',
		'2:2',
		'3:3',
		'4:4',
		'2:2',
		'3:3',
		'4:4',
		'3:3',
		'4:4',
		'4:4',
	]),
	10
);
console.log(
	points([
		'0:1',
		'0:2',
		'0:3',
		'0:4',
		'1:2',
		'1:3',
		'1:4',
		'2:3',
		'2:4',
		'3:4',
	]),
	0
);
console.log(
	points([
		'1:0',
		'2:0',
		'3:0',
		'4:0',
		'2:1',
		'1:3',
		'1:4',
		'2:3',
		'2:4',
		'3:4',
	]),
	15
);
console.log(
	points([
		'1:0',
		'2:0',
		'3:0',
		'4:4',
		'2:2',
		'3:3',
		'1:4',
		'2:3',
		'2:4',
		'3:4',
	]),
	12
);
