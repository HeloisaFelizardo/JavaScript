/* Erro de silêncio 
Conclua a checkForNewNotificationsfunção de forma que ela busque o seguinte endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json e chame a showNewNotificationsfunção com o número de notificações não lidas.
Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

const checkForNewNotifications = async () => {
	// TODO using async/await
	const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
	const data = await response.json();
	console.log(data);
	showNewNotifications(data.count);
};

// do NOT modify this function
function showNewNotifications(count) {
	console.log(`You have ${count} new notifications. Would you like to read them?`);
}

// Sample usage - do not modify
checkForNewNotifications();
