/* Tempo I
Assim que aprendermos sobre a API de busca, você poderá escrever a chamada de busca para uma API de clima (demo)!

Para este desafio, já estamos chamando a API de clima para você no index.js. Você tem que completar as seguintes funções em weather.js:

getCountryque retorna o país para o qual estamos mostrando o clima.
getIconque retorna o ícone .
getTemperatureque retorna a temperatura .
Observe que essas 3 funções recebem um dataobjeto que é um instantâneo de uma resposta proveniente de uma API real ( weatherstack.com ).
Você não pode resolver esse desafio sem começar com a console.log(data)em todas as funções. Você tem que explorar o objeto e ver onde pode conseguir o imóvel que procura.

/** @param {Object} data */
export function getCountry(data) {
	console.log(data);
	console.log(data.current, data.location, data.request);
	return data.location.country;
}

/** @param {Object} data */
export function getIcon(data) {
	return data.current.weather_icons[0];
}

/** @param {Object} data */
export function getTemperature(data) {
	return data.current.temperature;
}
