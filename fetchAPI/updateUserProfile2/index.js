import FetchWrapper from './fetch-wrapper.js';

const updateUserProfile = (firstName, lastName) => {
	const API = new FetchWrapper('https://api.learnjavascript.online/demo/');

	API.put('user.json', {
		firstName: firstName,
		lastName: lastName,
	});
	console.log('tá indo');
};

// Sample usage - do not modify
const form = document.querySelector('#user-form');
const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	updateUserProfile(fName.value, lName.value);
});
