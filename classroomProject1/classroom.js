/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
	// TODO: return the number of grades
	console.log(grades.length);
	return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
	// TODO: return the sum of all the grades
	let sum = 0;
	grades.forEach((grade) => {
		return (sum += grade);
	});
	console.log(sum);
	return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
	// TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
	console.log(getSumGrades(grades) / grades.length);
	return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
	// TODO: return all passing grades (10 and above)
	return grades.filter((grade) => {
		console.log(grade >= 10);
		return grade >= 10;
	});
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
	// TODO: return all failing grades (9 and below)
	return grades.filter((grade) => {
		console.log(grade < 10);
		return grade < 10;
	});
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
	// TODO: return all the grades raised by 1 (no grade should exceed 20)
	return grades.map((grade) => {
		if (grade + 1 > 20) {
			return 20;
		}
		console.log(grade + 1);
		return grade + 1;
	});
}
