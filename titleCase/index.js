/* Uma string é considerada como título se cada palavra na string for (a) maiúscula (ou seja, apenas a primeira letra da palavra está em maiúscula) ou (b) considerada uma exceção e colocada inteiramente em minúsculas, a menos que seja a primeira palavra, que é sempre maiúscula.

Escreva uma função que converterá uma string em maiúsculas e minúsculas, dada uma lista opcional de exceções (palavras secundárias). A lista de palavras secundárias será fornecida como uma string com cada palavra separada por um espaço. Sua função deve ignorar o caso da string de palavras secundárias - ela deve se comportar da mesma maneira, mesmo que o caso da string de palavras secundárias seja alterado.

Argumentos (Haskell)
Primeiro argumento : lista delimitada por espaços de palavras secundárias que sempre devem ser minúsculas, exceto para a primeira palavra na string.
Segundo argumento : a string original a ser convertida.

Primeiro argumento (obrigatório) : a string original a ser convertida.
Segundo argumento (opcional) : lista delimitada por espaços de palavras secundárias que sempre devem ser minúsculas, exceto para a primeira palavra na string. Os testes de JavaScript/CoffeeScript serão aprovados undefinedquando esse argumento não for usado.
Exemplo
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox' */

function titleCase(title, minorWords) {
	// Verifica se o título é uma string vazia e retorna uma string vazia nesse caso.
	if (!title) return '';

	// Converte as palavras exceções para minúsculas e as armazena em um array.
	// Se não for fornecida uma lista de palavras exceções (minorWords é null ou undefined),
	// o array de exceções ficará vazio.
	const minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : [];

	// Converte toda a string do título para letras minúsculas, para facilitar a comparação
	// com as palavras exceções (caso insensível a maiúsculas/minúsculas).
	const newText = title
		.toLowerCase()
		.split(' ')
		.map((word, index) => {
			// A função map percorre cada palavra no título, representada por "word".

			// Se for a primeira palavra no título (índice 0) ou a palavra não estiver na lista
			// de palavras exceções (minorWordsArray), então a palavra deve ser capitalizada.
			if (index === 0 || !minorWordsArray.includes(word)) {
				// A primeira letra da palavra é convertida para maiúscula e as demais letras
				// permanecem em minúsculas.
				return word.slice(0, 1).toUpperCase() + word.slice(1);
			} else {
				// Caso contrário, a palavra é uma exceção e permanece como está, toda em minúsculas.
				return word;
			}
		})
		// Une as palavras de volta em uma única string, separadas por espaços.
		.join(' ');

	// A primeira letra da string final (newText) é convertida para maiúscula,
	// para que o resultado seja uma string em formato de título.
	return newText.slice(0, 1).toUpperCase() + newText.slice(1);
}

// Exemplos de uso da função titleCase:
console.log(titleCase('')); // ''
console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'
