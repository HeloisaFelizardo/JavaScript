/* Calcule a soma da gradesmatriz e armazene-a em uma variável chamada sum. */

let grades = [10, 5, 15, 20];

// calculate the sum of these grades
const sum = grades.reduce((acc, curr) => {
	return acc + curr;
}, 0);

console.log(sum);
