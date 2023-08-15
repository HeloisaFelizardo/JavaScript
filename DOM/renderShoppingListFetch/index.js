/* Renderizar lista de compras 
Escreva o código necessário dentro da initfunção para buscar os itens da lista de compras da seguinte API: https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json .
Depois de buscar esses itens, você precisa inseri-los um a um no elemento com id shopping-list. */

const init = () => {
	// TODO: fetch shopping list items and render <li> elements
	fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const list = document.querySelector('#shopping-list');
			data.forEach((element) => {
				list.insertAdjacentHTML('beforeend', `<li>${element.item}</li>`);
			});
		});
};

// Sample usage - do not modify
init();
