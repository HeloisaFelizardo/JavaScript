import { handleItemClick } from './shopping-list.js';

document.querySelectorAll('#shopping-list li').forEach((li) => {
	li.addEventListener('click', (event) => {
		handleItemClick(event.currentTarget);
	});
});
