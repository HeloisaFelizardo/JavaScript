/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carros {
	marca;
	cor;
	consumoMedio;

	constructor(marca, cor, consumoMedio) {
		this.marca = marca;
		this.cor = cor;
		this.consumoMedio = consumoMedio;
	}

	calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
		return distanciaEmKm * this.consumoMedio * precoCombustivel;
	}
}

const uno = new Carros('Fiat', 'Prata', 1 / 12);

const escapade = new Carros('Peugeut', 'Preto', 1 / 10);

const gastoCombustivelComUno = uno
	.calcularGastoDePercurso(600, 5.36)
	.toFixed(2);

const gastoCombustivelComEscapade = escapade
	.calcularGastoDePercurso(600, 5.36)
	.toFixed(2);

console.log(
	`O custo de combustível de Cabo Frio à São Paulo com o ${escapade.marca} é ${gastoCombustivelComEscapade} reais`
);

console.log(
	`O custo de combustível de Cabo Frio à São Paulo com o ${uno.marca} é ${gastoCombustivelComUno} reais`
);

/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;  */

class Pessoa {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	calcularImc = () => (this.peso / Math.pow(this.altura, 2)).toFixed(1);

	classificarImc = () => {
		const imc = this.calcularImc();
		return imc < 18.5
			? 'Abaixo do peso'
			: imc >= 18.5 && imc < 25
			? 'Peso normal'
			: imc >= 25 && imc < 30
			? 'Acima do peso'
			: imc >= 30 && imc < 40
			? 'Obeso'
			: 'Obesidade grave';
	};
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.classificarImc());

const heloisa = new Pessoa('Heloisa', 64, 1.5);
console.log(heloisa.classificarImc());
