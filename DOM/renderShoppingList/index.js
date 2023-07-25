/**
 * @param {string[]} items
 */
const renderShoppingList = (items) => {
	const lista = document.querySelector('#shopping-list');
	items.forEach((item) => lista.insertAdjacentHTML('beforeend', `<li>${item}</li>`));
};

// Sample usage - do not modify
const sampleList = ['Orange', 'Banana', 'Coffee', 'Paper'];
console.log(renderShoppingList(sampleList));
