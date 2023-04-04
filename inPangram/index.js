/* Um pangrama é uma frase que contém todas as letras do alfabeto pelo menos uma vez. Por exemplo, a frase "A rápida raposa marrom pula sobre o cachorro preguiçoso" é um pangrama, porque usa as letras AZ pelo menos uma vez (as letras maiúsculas e minúsculas são irrelevantes).

Dada uma string, detecte se é ou não um pangrama. Retorna True se for, False se não. Ignore números e pontuação. */

function isPangram(string) {
	alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	return alphabets.every((x) => string.includes(x)) ? true : false;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string), true);

var string = 'Cwm fjord bank glyphs vext quiz';
console.log(isPangram(string), false);
