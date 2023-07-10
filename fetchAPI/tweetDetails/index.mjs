import FetchWrapper from './fetch-wrapper.mjs';

const getTweetDetails = () => {
	const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/');
	API.get('1080777336298049537.json').then((data) => {
		const firstName = data.author.details.firstName;
		const lastName = data.author.details.lastName;
		showAuthorName(`${firstName} ${lastName}`);
	});
};

// do NOT modify this function
function showAuthorName(fullName) {
	console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();
