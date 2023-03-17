/**
 * Obter resto da divisão por 2
Complete a função evenOrOddde forma que ela retorne a string "par" quando o parâmetro numérico que ela recebe for par e "ímpar" caso contrário.
Você pode fazê-lo funcionar com números negativos também?
 * @param {string} number
 */
export function evenOrOdd(number) {
	return number % 2 === 0 ? 'even' : 'odd';
}
