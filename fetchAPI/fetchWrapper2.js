class FetchWrapper {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	async get(endpoint) {
		const response = await fetch(this.baseURL + endpoint);
		return await response.json();
	}

	// TODO: implement FetchWrapper's put method
	async put(endpoint, body) {
		const response = await fetch(this.baseURL + endpoint, {
			method: 'put',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	}
}

// Sample usage - do not modify
/* normally, we don't use try/catch with fetch.
 * This is only for this challenge to allow you to
 * work on the tests one by one. */
try {
	const API = new FetchWrapper('https://api.learnjavascript.online');

	API.put('/demo/grades.json', {
		grade: 18,
	}).then((data) => {
		console.log(data);
	});
} catch (error) {}
