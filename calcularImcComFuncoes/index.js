/* 
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

-refatoramos o código em funções 
-Isolamos casa parte em funções*/

const calcularIMC = (peso, altura) => {
	return peso / Math.pow(altura, 2);
};

const classificarIMC = (imc) => {
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

//Essa é uma função anônima que é criada e já é executada, ela só existe dentro do parênteses
(function () {
	const peso = 64;
	const altura = 1.5;

	const imc = calcularIMC(peso, altura);
	console.log(classificarIMC(imc));
})();
