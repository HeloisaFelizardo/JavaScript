/* O Western Suburbs Croquet Club tem duas categorias de membros, Senior e Open. Eles gostariam de sua ajuda com um formulário de inscrição que informará aos associados em potencial em qual categoria eles serão colocados.

Para ser um sénior, o membro deve ter pelo menos 55 anos e um handicap superior a 7. Neste clube de croquet, os handicaps variam de -2 a +26; quanto melhor o jogador, menor o handicap.

Entrada
A entrada consistirá em uma lista de pares. Cada par contém informações para um único membro em potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para a deficiência da pessoa.

Saída
A saída consistirá em uma lista de valores de string (em Haskell e C: Openou Senior) informando se o respectivo membro deve ser colocado na categoria sênior ou aberta.

Exemplo
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

const openOrSenior = (data) =>
	data.map((member) =>
		member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open'
	);

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
/* function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
} */

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	]),
	['Open', 'Senior', 'Open', 'Senior']
);
console.log(
	openOrSenior([
		[3, 12],
		[55, 1],
		[91, -2],
		[53, 23],
	]),
	['Open', 'Open', 'Open', 'Open']
);
console.log(
	openOrSenior([
		[59, 12],
		[55, -1],
		[12, -2],
		[12, 12],
	]),
	['Senior', 'Open', 'Open', 'Open']
);
