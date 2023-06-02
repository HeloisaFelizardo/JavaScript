const pessoa = {
	nome: 'Heloisa',
	idade: 38,
	falar: function () {
		console.log(`Meu nome é ${this.nome}`);
	},
};

const y = pessoa.falar;
pessoa.falar();
y();

const total = '10' - 15 + 5;

console.log(total);
