/* const pessoa = {
	genero: 'masculino',
};

const renan = {
	nome: 'Renan',
	idade: 30,
	__proto__: pessoa,
};

console.log(renan.genero);
 */

///////////////////////////////////////////////////////////Função Construtora
/* function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

Pessoa.prototype.falar = function () {
	console.log(`Meu nome é ${this.nome}`);
};
 */
////////////////////////////////////////////////////////////Classe
/* class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`);
	}
}
const renan = new Pessoa('Renan', 30);

console.log(renan);
renan.falar(); */

////////////////////////////////////////////////////////////// Função construtora que cria um objeto enriquecido
function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

Pessoa.prototype.falar = function () {
	console.log(`Meu nome é ${this.nome}`);
};

const renan = {
	genero: 'masculino',
};

Pessoa.call(renan, 'Renan', 30);

console.log(renan);

//////////////////////////////////////////////////////////////////Todos os objetos em javaScript tem protótipo. Abaixo o exemplo de modificação de protótipo de String

//Não é uma boa prática enriquecer através dos protótipos, esse é só um exemplo do funcionamento
/* String.prototype.toPlang = function () {
	return `P ${this}`;
};

console.log('teste'.toPlang());

const renan = {
	nome: 'Renan',
};

renan.__proto__ = {
	idade: 30,
};

console.log(renan.idade); */

///////////////////////////////////////////////////////////////////////////

/* class Pessoa {
	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	calculaImc() {
		return `Imc: ${this.peso / Math.pow(this.altura, 2)}`;
	}
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose);

console.log(jose.calculaImc());
 */
