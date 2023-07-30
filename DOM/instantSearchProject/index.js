/* Projeto de pesquisa instantânea 
O endpoint da API a seguir retorna o clima para Amsterdam:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

E este retorna o tempo para Berlin:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

Fornecemos a você um <select>onde o usuário pode selecionar Amsterdamou Berlin. Escreva o código necessário de forma que a temperatura seja mostrada no #weather-resultelemento toda vez que o usuário selecionar uma cidade do <select>. O #weather-resultelemento deve dizer: It's X degrees celsius.onde Xestá a temperatura recebida da API.

Certifique-se de testá-lo na guia do navegador ! */

import FetchWrapper from './fetch-wrapper.js';

const cities = document.querySelector('#cities-dropdown');
const result = document.querySelector('#weather-result');

const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/');

cities.addEventListener('change', () => {
	console.log(cities.value);
	API.get(`${cities.value}.json`).then((data) => {
		const temperature = data.current.temperature;
		result.textContent = `It's ${temperature} degrees celsius.`;
	});
});
