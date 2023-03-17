import { getVotersCount } from './stats.js';

const city = document.querySelector('#city-select');
const count = document.querySelector('#count');
const cityName = document.querySelector('#city-name');

city.addEventListener('change', () => {
	if (!city.value) {
		return false;
	}
	fetch(
		`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/city-stats/${city.value}.json`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			cityName.textContent = city.options[city.selectedIndex].textContent;
			count.textContent = getVotersCount(data);
		});
});
