/* Conclua a função getUpperCasedPropertiesde forma que ela retorne uma matriz contendo todas as propriedades do course parâmetro que recebe. Todas as teclas devem estar em letras maiúsculas. Verifique o uso de amostra para ver a saída esperada. */

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const getUpperCasedProperties = (course) =>
	Object.keys(course).map((key) => key.toUpperCase());

// Sample usage - do not modify
console.log(
	getUpperCasedProperties({ id: 1, name: 'Learn JavaScript', year: 2021 })
); // ["ID", "NAME", "YEAR"]
console.log(
	getUpperCasedProperties({
		name: 'Learn JavaScript',
		category: 'Programming',
	})
); // ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); // []
