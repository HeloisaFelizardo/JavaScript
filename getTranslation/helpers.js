/* Complete a função getTranslationde forma que retorne a tradução correta para a palavra "bem-vindo" dependendo do idioma escolhido pelo usuário.
Certifique-se de verificar os diferentes logs no console ao selecionar um valor no menu suspenso na guia do navegador .
O objetivo deste desafio é entender a leitura de uma propriedade dinâmica e por que às vezes ela é necessária.

Voltaremos a esse desafio, mais adiante, de oferecer uma "tradução padrão" quando um determinado idioma ainda não possui tradução. */
import translations from './translations.js';

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
	console.log(translations);
	console.log(language);
	return translations.welcome[language];
};
