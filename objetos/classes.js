//Exemplo de classe, evita a repetição de código. Classe é a definição.
class Pessoa {
	nome;
	idade;
	anoDeNascimento;

	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2023 - idade;
	}

	descrever() {
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
	}
}

//Instânciando a classe Pessoa()
const vitor = new Pessoa('Vitor', 25);

const heloisa = new Pessoa('Heloisa', 30);

console.log(vitor);
console.log(heloisa);

vitor.descrever();
heloisa.descrever();
