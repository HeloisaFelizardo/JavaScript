/**
 * Obtenha a próxima idade II
Complete a função getNextAgede forma que ela retorne a idade no próximo ano (adicionando 1 à idade atual).
Observe que o ageé fornecido pelo usuário em uma caixa de texto (que você pode experimentar na guia do navegador ).
No entanto, quando a caixa de texto está vazia, a função retorna NaN. Precisamos corrigir isso e mostrar 0 em vez de NaN.
 * @param {string} age
 */
export function getNextAge(age) {
	if (age) {
		return Number.parseInt(age) + 1;
	}
	return 0;
}
