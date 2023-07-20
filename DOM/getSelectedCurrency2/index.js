import { getSelectedCurrencies } from './helpers.js';

document.querySelectorAll('.cards .card').forEach((card) => {
	card.addEventListener('click', (event) => {
		event.currentTarget.classList.toggle('active');
		console.log(getSelectedCurrencies());
	});
});
