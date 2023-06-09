export const sumGrades = (grades, callback) => {
	// simulate expensive operation
	setTimeout(() => {
		const sum = grades.reduce((total, current) => total + current, 0);
		if (callback) {
			callback(sum); // call the success callback with the sum
		}
	}, 2_000);
};
