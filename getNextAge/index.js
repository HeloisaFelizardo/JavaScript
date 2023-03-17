import { getNextAge } from './age.js';

const age = document.querySelector('#your-age');
const nextAge = document.querySelector('#next-age');

age.addEventListener('keyup', () => {
	nextAge.textContent = getNextAge(age.value);
});
