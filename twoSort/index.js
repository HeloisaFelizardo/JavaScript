/* Você receberá uma lista de strings. Você deve classificá-lo em ordem alfabética (com distinção entre maiúsculas e minúsculas e com base nos valores ASCII dos caracteres) e, em seguida, retornar o primeiro valor.

O valor retornado deve ser uma string, e ter "***"entre cada uma de suas letras.

Você não deve remover ou adicionar elementos de/para o array. */

const twoSort = (s) => {
	s.sort();

	let word = s[0];
	let result = '';

	for (let i = 0; i < word.length - 1; i++) {
		result += word[i] + '***';
	}
	result += word.at(-1) + '';
	return result;
};

/* function twoSort(s) {
    return s.sort()[0].split('').join('***');
  } */

console.log(
	twoSort([
		'bitcoin',
		'take',
		'over',
		'the',
		'world',
		'maybe',
		'who',
		'knows',
		'perhaps',
	]),
	'b***i***t***c***o***i***n'
);
console.log(
	twoSort([
		'turns',
		'out',
		'random',
		'test',
		'cases',
		'are',
		'easier',
		'than',
		'writing',
		'out',
		'basic',
		'ones',
	]),
	'a***r***e'
);
