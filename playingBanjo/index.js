/* Crie uma função que responda à pergunta "Você está tocando banjo?".
Se o seu nome começa com a letra "R" ou "r" minúsculo, você está tocando banjo!

A função usa um nome como seu único argumento e retorna uma das seguintes strings:

name + " plays banjo" 
name + " does not play banjo"
Os nomes fornecidos são sempre cadeias de caracteres válidas. */

function areYouPlayingBanjo(name) {
	// Implement me
	/* if (name[0] === 'R' || name[0] === 'r') {
		return (name += ' plays banjo');
	} else {
		return (name += ' does not play banjo');
	} */

	return name[0] === 'R' || name[0] === 'r'
		? (name += ' plays banjo')
		: (name += ' does not play banjo');
}

console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Ringo'));
console.log(areYouPlayingBanjo('rolf'));
