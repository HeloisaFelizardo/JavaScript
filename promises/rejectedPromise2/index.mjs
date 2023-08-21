/* Conclua a checkForNewNotificationsfunção de forma que ela busque o seguinte endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json e chame a showNewNotificationsfunção com o número de notificações não lidas.
Quando a fetchsolicitação falhar, você deve chamar a showNewNotifications()função sem nenhum argumento. Isso registrará: We could not load your notifications. Try again later..

Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

import FetchWrapper from './fetch-wrapper.mjs';

const checkForNewNotifications = async () => {
	// TODO using async/await + handle errors
	try {
		const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');
		const data = await API.get('/notifications/new.json');
		showNewNotifications(data.count);
	} catch (error) {
		console.error(error);
		showNewNotifications();
	}
};

// do NOT modify this function
function showNewNotifications(count) {
	if (!count) {
		console.log('We could not load your notifications. Try again later.');
		return;
	}
	console.log(`You have ${count} new notifications. Would you like to read them?`);
}

// Sample usage - do not modify
checkForNewNotifications();
