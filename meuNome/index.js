const escrevaNome = (nome) => {
	return `Meu nome é ${nome}`;
};

/* escrevaNome('Heloisa');
escrevaNome('Vitor'); */

const verificarIdade = (idade) => {
	return idade >= 18
		? `${escrevaNome('heloisa')} Você é maior de idade`
		: 'Você é menor de idade';
};

console.log(verificarIdade(39));
console.log(verificarIdade(16));
