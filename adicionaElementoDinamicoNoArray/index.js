/**
 * @param {array} apps
 * @param {string} app
 */
function useApp(apps, app) {
	apps.push(app);
	return apps;
}

// Sample usage - do not modify
console.log(useApp(['Clock', 'Twitter'], 'Firefox')); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], 'Safari')); // ["Safari"]
