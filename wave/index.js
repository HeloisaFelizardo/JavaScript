/* Regras
1. A string de entrada sempre será minúscula, mas talvez vazia.

 2. Se o caractere na string for um espaço em branco, passe por cima dele como se fosse um assento vazio
Exemplo
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

function wave(str) {
	let result = [];
	str.split('').forEach((char, index) => {
		if (/[a-z]/.test(char)) {
			result.push(
				str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
			);
		}
	});
	return result;
}

//Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'
console.log(wave('hello'));

//'Codewars','cOdewars','coDewars','codEwars','codeWars','codewArs','codewaRs',	'codewarS',
console.log(wave('codewars'));

console.log(wave(''));

//	'Two words','tWo words','twO words','two Words','two wOrds','two woRds','two worDs','two wordS',

console.log(wave('two words'));

// Gap ', ' gAp ', ' gaP '
console.log(wave(' gap '));
