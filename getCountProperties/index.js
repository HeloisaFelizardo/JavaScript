/* Complete a função getCountPropertiesde forma que ela retorne o número de chaves no objeto courseque recebe. Verifique o uso de amostra para ver a saída esperada.

Observação: esse desafio provavelmente é mais fácil do que você pensa. Se você acha que está complicando demais, confira as dicas. */

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 * @param {number} [course.category]
 */
const getCountProperties = (course) => {
	return Object.keys(course).length;
};

// Sample usage - do not modify
console.log(
	getCountProperties({
		id: 1,
		name: 'Learn JavaScript',
		year: 2021,
		category: 'Programming',
	})
); // 4
console.log(
	getCountProperties({ name: 'Learn JavaScript', category: 'Programming' })
); // 2
console.log(getCountProperties({})); // 0
