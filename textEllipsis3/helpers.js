/**
 * Reticências de texto Projeto III
Complete a função getDescriptionde forma que ela retorne os 10 primeiros caracteres do textparâmetro que recebe seguidos de reticências. Uma reticência é o caractere de ponto escrito 3 vezes:...

No entanto, sempre que o texto tiver 10 caracteres ou menos, as reticências não devem ser adicionadas porque o texto não está sendo cortado!

Existem várias maneiras de resolver esse desafio. Não se apresse e cometa o máximo de erros possível ;) E certifique-se de experimentá-lo na guia do navegador.
 * @param {string} text
 */
export function getDescription(text) {
	console.log(text); // write something in the BROWSER and see it in the console
	if (text.length <= 10) {
		return text;
	}
	return text.substring(0, 10) + '...';
}
