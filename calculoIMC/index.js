/* O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

const calculoIMC = (peso, altura) => {
	let imc = peso / Math.pow(altura, 2);

	console.log(imc.toFixed(1));
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

console.log(calculoIMC(37.5, 1.45));
console.log(calculoIMC(64, 1.5));
