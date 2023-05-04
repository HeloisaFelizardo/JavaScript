import { getTranslation } from './helpers.js';

const dropdown = document.querySelector('#countries');
const output = document.querySelector('#output');

dropdown.addEventListener('change', () => {
	output.textContent = getTranslation(dropdown.value);
});
