/* Nossa logUserIdsfunção falha quando a chamamos sem nenhum parâmetro.
Corrija isso sem usar uma ifcondição. */

/**
 * @param {number[]} userIds
 */
function logUserIds(userIds = []) {
	userIds.forEach((userId) => {
		console.log(userId);
	});
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console
logUserIds(); // should NOT fail
