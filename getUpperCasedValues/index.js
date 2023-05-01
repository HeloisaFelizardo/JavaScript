/* Complete a função getUpperCasedValues de forma que ela retorne uma matriz contendo todos os valores de propriedade no course parâmetro que ela recebe. Cada valor de propriedade deve estar em letras maiúsculas. Verifique o uso de amostra para ver a saída esperada. */

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const getUpperCasedValues = (course) =>
	Object.values(course).map((value) => value.toUpperCase());

// Sample usage - do not modify
console.log(getUpperCasedValues({ name: 'Learn JavaScript' })); // ["LEARN JAVASCRIPT"]
console.log(
	getUpperCasedValues({ name: 'Learn JavaScript', category: 'Programming' })
); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
console.log(getUpperCasedValues({})); // []
