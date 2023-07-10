/* Projeto de API do clima
O endpoint da API a seguir retorna o clima para Amsterdam:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

E este retorna o tempo para Berlin:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

Não é o tempo ao vivo, mas sim um instantâneo do tempo em um determinado dia. A estrutura dos dados é exatamente a mesma fornecida pelo weatherstack.com.

Fornecemos a você um <select>onde o usuário pode selecionar Amsterdamou Berlin. Conclua a getWeatherfunção de forma que ela faça a solicitação de busca correta e chame a showTemperaturefunção com a temperatura que foi retornada na resposta da API.

Certifique-se de testá-lo na guia do navegador !

Recomendamos que você use o arquivo exportado FetchWrapperde fetch-wrapper.js. */

import FetchWrapper from './fetch-wrapper.js';

export const getWeather = (city) => {
	// TODO: fetch the correct url depending on city and call showTemperature with the temperature
	const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/`);
	API.get(`${city}.json`).then((data) => showTemperature(data.current.temperature));
};

// Do NOT modify the code below
const result = document.querySelector('#result');
const showTemperature = (temperature) => {
	result.textContent = `It's ${temperature} degrees celsius.`;
};
