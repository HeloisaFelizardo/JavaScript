/* Erro de silêncio 
O endpoint da API a seguir retorna o clima para Amsterdam:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json

E este retorna o tempo para Berlin:

https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json

Não é o tempo ao vivo, mas sim um instantâneo do tempo em um determinado dia. A estrutura dos dados é exatamente a mesma fornecida pelo weatherstack.com.

Fornecemos a você um <select>onde o usuário pode selecionar Amsterdamou Berlin. Conclua a getWeatherfunção de forma que ela faça a solicitação de busca correta e chame a showTemperaturefunção com a temperatura que foi retornada na resposta da API.

Certifique-se de testá-lo na guia do navegador !

Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

export const getWeather = async (city) => {
	// TODO: using async/await, fetch the correct url depending on city and call showTemperature with the temperature
	const response = await fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`);
	const data = await response.json();
	console.log(data.current.temperature);
	showTemperature(dat.current.temperature);
};

// Do NOT modify the code below
const result = document.querySelector('#result');
const showTemperature = (temperature) => {
	result.textContent = `It's ${temperature} degrees celsius.`;
};
