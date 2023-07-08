const saveGrade = (grade) => {
	const url = 'https://api.learnjavascript.online/demo/';
	const endpoint = 'grades.json';

	fetch(`${url}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify({
			grade: grade,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	saveGrade(userGrade.value);
});
