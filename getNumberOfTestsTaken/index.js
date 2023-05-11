/* Número de testes
Complete a função getNumberOfTestsTakende forma que ela retorne o número de testes realizados. */

/**
 * @param {Object[]} grades
 * @param {string} grades.date
 * @param {number} grades.grade
 */
const getNumberOfTestsTaken = (grades) => {
	return grades.length;
};

// Sample usage - do not modify
const grades = [
	{
		date: '2018-12-13',
		grade: 14,
	},
	{
		date: '2018-12-15',
		grade: 18,
	},
];
console.log(getNumberOfTestsTaken(grades)); // 2
