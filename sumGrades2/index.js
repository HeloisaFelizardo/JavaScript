/* Usando as funções de seta, conclua a função sumGradesde forma que ela retorne a soma de todas as notas recebidas como parâmetro. Ainda não vimos reduzir , então tente resolvê-lo usando o que você aprendeu até agora. */

/**
 * @param {number[]} grades
 */
const sumGrades = (grades) => {
	let sum = 0;
	grades.forEach((grade) => (sum += grade));
	return sum;
};

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
