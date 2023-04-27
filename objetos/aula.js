class Pessoa {
	nome;
	idade;
	anoDeNascimento;

	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}

const compararPessoas = (p1, p2) =>
	p1.idade > p2.idade
		? console.log(`${p1.nome} é mais velho que ${p2.nome}.`)
		: p1.idade < p2.idade
		? console.log(`${p2.nome} é mais velho que ${p1.nome}.`)
		: console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);

const vitor = new Pessoa('Vitor', 30);
const renan = new Pessoa('Renan', 25);

compararPessoas(renan, vitor);
