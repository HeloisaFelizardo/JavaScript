/* Moedas preferenciais 
O usuário agora pode selecionar mais de uma moeda para fornecer sua preferência. Assim, por exemplo, o usuário pode selecionar EURe USDclicar sobre eles um por um. Experimente na guia do navegador .

Complete a getSelectedCurrenciesfunção de forma que ela retorne uma matriz de moedas. Portanto, no exemplo acima, ele deve retornar [EUR, USD].

Nota: as moedas selecionadas têm a activeclasse adicionada a elas.*/

export const getSelectedCurrencies = () => {
	const cards = document.querySelectorAll('.cards .card.active');

	const coins = [...cards].map((card) => card.textContent);

	return coins;
};
