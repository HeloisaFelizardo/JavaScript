//Exemplo de objeto.
const pessoa = {
	nome: 'Heloisa',
	idade: 30,

	descrever: function () {
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
	},
};

//Atribuindo outro valor para a propriedade nome
pessoa.nome = 'Renan';

//Atribuindo outro valor para a propriedade nome dinamicamente
pessoa['nome'] = 'Gustavo';

//Alterando a instrução da função descrever
pessoa.descrever = function () {
	console.log(`Meu nome é ${this.nome}`); // é possível acessar e alterar o método fora do objeto
};

//executando a função do objeto
pessoa.descrever();
