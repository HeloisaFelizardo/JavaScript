// TODO: implement FetchWrapper
class FetchWrapper {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	async get(endpoint) {
		return fetch(`${this.baseURL}${endpoint}`).then((response) => response.json());
	}
}

// Sample usage - do not modify
/* normally, we don't use try/catch with fetch.
 * This is only for this challenge to allow you to
 * work on the tests one by one. */
try {
	const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

	API.get('/notifications/new.json').then((data) => {
		console.log(data);
	});
} catch (error) {}
