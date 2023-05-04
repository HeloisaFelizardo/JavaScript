/* Complete a função getTranslationde forma que retorne a tradução correta para a palavra "bem-vindo" dependendo do idioma escolhido pelo usuário.
Quando a tradução não for encontrada, o padrão é a tradução "Welcome"(você pode codificá-la ou retirá-la do arquivo de tradução).
Certifique-se de verificar os diferentes logs no console ao selecionar um valor no menu suspenso na guia do navegador . Adicionamos 2 idiomas que não possuem tradução para que você possa testar sua lógica. */

import translations from './translations.js';

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
	console.log(translations);
	console.log(language);

	return translations.welcome[language] ?? 'Welcome';
};
