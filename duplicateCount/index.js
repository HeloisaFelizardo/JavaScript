/* Escreva uma função que retorne a contagem de caracteres alfabéticos distintos que não diferenciam maiúsculas de minúsculas e dígitos numéricos que ocorrem mais de uma vez na string de entrada. Pode-se presumir que a string de entrada contém apenas letras (maiúsculas e minúsculas) e dígitos numéricos.

Exemplo
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibilidade" -> 1 # 'i' occurs six times
"Indivisibilidades" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text) {
	let charsRepetidos = {};
	text = text.toLowerCase();
	for (let i = 0; i < text.length; i++) {
		if (charsRepetidos[text[i]]) {
			charsRepetidos[text[i]]++;
		} else {
			charsRepetidos[text[i]] = 1;
		}
	}
	let contagem = 0;
	for (let char in charsRepetidos) {
		if (charsRepetidos[char] > 1) {
			contagem++;
		}
	}
	return contagem;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
	duplicateCount('Indivisibilities'),
	2,
	'characters may not be adjacent'
);
