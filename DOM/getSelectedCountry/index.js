import { getSelectedCountry } from './helpers.js';

const dropdown = document.querySelector('#countries-dropdown');
dropdown.addEventListener('change', () => {
	console.log(getSelectedCountry());
});
