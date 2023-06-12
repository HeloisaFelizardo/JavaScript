/* Fornecemos a você uma getWeatherDescriptionfunção que espera um nome de cidade (somente Amsterdamou Tokyo) e resolve a descrição do tempo depois de um tempo.
Implemente o logWeatherDescriptiontal que ele usa getWeatherDescriptionpara registrar a descrição do tempo no console.
Observe o uso de amostra para ver o resultado esperado. */

import { getWeatherDescription } from './weather.mjs';

/**
 * @param {string} cityName
 */
const logWeatherDescription = (cityName) => {
	getWeatherDescription(cityName).then((data) => console.log(data));
};

// Sample usage - do not modify
logWeatherDescription('Amsterdam'); // will eventually log "Cloudy"
logWeatherDescription('Tokyo'); // will eventually log "Sunny"
