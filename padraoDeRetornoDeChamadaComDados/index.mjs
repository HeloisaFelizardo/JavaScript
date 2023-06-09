import { sumGrades } from './helpers.mjs';

/**
 * @param {number[]} grades
 */
const calculateSum = (grades) => {
	sumGrades(grades, (value) => {
		console.log(`The sum is: ${value}`);
	});
};

// Sample usage - do not modify
calculateSum([18, 10]);
calculateSum([15, 10, 20]);
