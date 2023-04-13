/* 
Houve um teste em sua classe e você passou. Parabéns!
Mas você é uma pessoa ambiciosa. Você quer saber se é melhor do que o aluno médio de sua classe.

Você recebe uma matriz com as pontuações dos testes de seus colegas. Agora calcule a média e compare sua pontuação!

Volte True se estiver melhor, caso contrário False!

Observação:
Seus pontos não estão incluídos na matriz de pontos de sua classe. Para calcular o ponto médio, você pode adicionar seu ponto à matriz fornecida!
*/

function betterThanAverage(classPoints, yourPoints) {
	// Your code here

	classPoints.push(yourPoints);

	let sum = 0;
	classPoints.forEach((points) => {
		sum += points;
	});

	let media = sum / classPoints.length;

	return yourPoints > media;
}

/* 
Ese código é o mesmo que esse:

return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
*/

//betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], [75]);

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
