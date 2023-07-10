/* Exibir novas notificações
Conclua a checkForNewNotificationsfunção de forma que ela busque o seguinte endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json e chame a showNewNotificationsfunção com o número de notificações não lidas.
Recomendamos que você use o arquivo exportado FetchWrapperde fetch-wrapper.js. */

import FetchWrapper from './fetch-wrapper.mjs';

const checkForNewNotifications = () => {
	const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/');

	API.get('notifications/new.json').then((data) => showNewNotifications(data.count));
};

// do NOT modify this function
function showNewNotifications(count) {
	console.log(`You have ${count} new notifications. Would you like to read them?`);
}

// Sample usage - do not modify
checkForNewNotifications();
