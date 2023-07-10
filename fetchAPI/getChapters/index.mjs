import FetchWrapper from './fetch-wrapper.mjs';

const getChapters = () => {
	const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/`);
	API.get(`all.json`).then((data) => {
		const isCompleted = data.filter((chapter) => chapter.isCompleted);
		displayCompletedChapters(isCompleted);
	});
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
	console.log('Received', chapters);
}

// Sample usage - do not modify
getChapters();
