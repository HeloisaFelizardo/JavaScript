const getChapters = () => {
	fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
		.then((response) => response.json())
		.then((data) => {
			const completedChapters = data.filter((chapter) => chapter.isCompleted);
			displayCompletedChapters(completedChapters);
		});
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
	console.log('Received', chapters);
}

// Sample usage - do not modify
getChapters();
