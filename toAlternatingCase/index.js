/* Defina String.prototype.toAlternatingCase(ou uma função/método semelhante, como to_alternating_case / toAlternatingCase/ ToAlternatingCaseno idioma selecionado; consulte a solução inicial para obter detalhes ) de modo que cada letra minúscula se torne maiúscula e cada letra maiúscula se torne minúscula. Por exemplo:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
Como de costume, sua função/método deve ser puro, ou seja, não deve alterar a string original.

 */

String.prototype.toAlternatingCase = function () {
	// Define your method here :)
	return this.split('')
		.map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
		.join('');
};

console.log('hello world'.toAlternatingCase(), 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase(), 'hello world');
console.log('hello WORLD'.toAlternatingCase(), 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
console.log('12345'.toAlternatingCase(), '12345');
console.log('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
console.log(
	'String.prototype.toAlternatingCase'.toAlternatingCase(),
	'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
);
console.log(
	'Hello World'.toAlternatingCase().toAlternatingCase(),
	'Hello World'
);
