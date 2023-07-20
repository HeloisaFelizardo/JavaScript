/* Seletor de consulta básica 
O usuário é solicitado a selecionar uma moeda clicando nela. Quando um .cardé clicado, adicionamos a classe activea ele e removemos a classe activedo cartão anterior. Portanto, apenas uma moeda pode ser selecionada por vez. Experimente na guia do navegador clicando nas moedas!

Esse efeito destacado vem da classe activeque você encontra no final do arquivo index.css.

Complete a getSelectedCurrencyfunção de forma que ela retorne a moeda que o usuário selecionou. Retorne o texto do cartão selecionado.

Certifique-se de experimentá-lo na guia do navegador .

Observação: assim que você aprender sobre eventos DOM, você mesmo poderá codificar essa interface de usuário em um desafio futuro ;) */

export const getSelectedCurrency = () => {
	const currency = document.querySelector('.card.active');
	return currency.textContent;
};
