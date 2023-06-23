/* A função logWeatherDescription inicia um carregador e o interrompe em caso de sucesso e erro.
Atualize o código eliminando a stopLoader()duplicação (deve ser chamado apenas uma vez). */
import { startLoader, stopLoader } from './helpers.js';
import { getWeatherDescription } from './weather.js';
/**
 * @param {string} cityName
 */
const logWeatherDescription = (cityName) => {
	startLoader();
	getWeatherDescription(cityName)
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		})
		.finally(() => {
			stopLoader();
		});
};

// Sample usage - do not modify
logWeatherDescription('Amsterdam'); // will eventually log "Cloudy"
logWeatherDescription('Tokyo'); // will eventually log "Sunny"
logWeatherDescription('Patagonia'); // will eventually fail
const numberCity = 221;
logWeatherDescription(numberCity); // will eventually fail
