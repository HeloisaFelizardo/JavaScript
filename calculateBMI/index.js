/* Escreva a função bmi que calcula o índice de massa corporal (bmi = peso / altura 2 ).

se bmi <= 18,5 retorne "Abaixo do peso"

se bmi <= 25,0 retorne "Normal"

se bmi <= 30,0 retorne "Excesso de peso"

se IMC > 30 retorne "Obeso" */

const bmi = (weight, height) => {
	let bmi = weight / Math.pow(height, 2);
	return bmi <= 18.5
		? 'Underweight'
		: bmi <= 25.0
		? 'Normal'
		: bmi <= 30
		? 'Overweight'
		: 'Obese';
};

console.log(bmi(80, 1.8), 'Normal');
