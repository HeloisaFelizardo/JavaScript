import { getDivisionRemainderBy2 } from './numbers.js';

const number = document.querySelector('#your-number');
const output = document.querySelector('#output');

number.addEventListener('keyup', () => {
	output.textContent = getDivisionRemainderBy2(
		Number.parseInt(number.value, 10)
	);
});
