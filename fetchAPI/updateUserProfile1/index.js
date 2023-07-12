const updateUserProfile = (firstName, lastName) => {
	const url = 'https://api.learnjavascript.online/demo/';
	const endpoint = 'user.json';

	fetch(`${url}${endpoint}`, {
		method: 'PUT',
		body: JSON.stringify({
			firstName: firstName,
			lastName: lastName,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
};

// Sample usage - do not modify
const form = document.querySelector('#user-form');
const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	updateUserProfile(fName.value, lName.value);
});
