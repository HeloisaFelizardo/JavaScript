import FetchWrapper from './fetch-wrapper.js';

const saveGrade = (grade) => {
	const API = new FetchWrapper('https://api.learnjavascript.online/demo/');
	API.post('grades.json', { grade: grade }).then((data) => console.log(data));
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	saveGrade(userGrade.value);
});
