/* Todos os animais estão tendo uma festa! Cada animal está trazendo um prato. A regra é única: o prato deve começar e terminar com as mesmas letras do nome do animal. Por exemplo, a grande garça azul está trazendo alho naan e o chapim está trazendo bolo de chocolate.

Escreva uma função feastque receba o nome e o prato do animal como argumentos e retorne true ou false para indicar se a besta pode trazer o prato para o banquete.

Suponha que beaste dishsejam sempre strings minúsculas e que cada uma tenha pelo menos duas letras. beaste dishpode conter hífens e espaços, mas eles não aparecerão no início ou no final da string. Eles não conterão numerais. */

function feast(beast, dish) {
	//your function here
	return (
		beast[0] === dish[0] &&
		beast[beast.length - 1] === dish[dish.length - 1]
	);
}

console.log(feast('great blue heron', 'garlic naan'), true);
console.log(feast('chickadee', 'chocolate cake'), true);
console.log(feast('brown bear', 'bear claw'), false);
