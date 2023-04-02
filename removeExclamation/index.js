/* Escreva a função RemoveExclamationMarks que remove todos os pontos de exclamação de uma determinada string. */
function removeExclamationMarks(s) {
	//return s.match(/!/g)
	return s.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello World!'), 'Hello World');
