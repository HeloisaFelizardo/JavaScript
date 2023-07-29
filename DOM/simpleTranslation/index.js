/* tradução simples III 
Escreva o código necessário de index.jsforma que o #output-textelemento mostre a tradução correta quando o usuário selecionar um idioma no menu suspenso.
Você precisará importar a getTranslationfunção do arquivo helpers.
A tradução para alguns idiomas está faltando. No entanto, a getTranslationfunção será padronizada para a palavra em inglês nesse caso */

// TODO: Update output when the user selects a new language
import { getTranslation } from './helpers.js';

const countries = document.querySelector('#languages-list');
const outPut = document.querySelector('#output-text');

countries.addEventListener('change', () => {
	outPut.textContent = getTranslation(countries.value);
});
