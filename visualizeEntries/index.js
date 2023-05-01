/* Este é um desafio de visualização, o que significa que o objetivo é que você visualize como um método funciona.
Complete a função visualizeEntriesde forma que ela retorne as entradas do courseobjeto que recebe como parâmetro. Em seguida, observe o resultado no console e gaste algum tempo entendendo como o objeto é convertido em uma matriz de matrizes. */

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const visualizeEntries = (course) => Object.entries(course);

// Sample usage - do not modify
console.log(visualizeEntries({ id: 1, name: 'Learn JavaScript', year: 2021 }));
console.log(
	visualizeEntries({ name: 'Learn JavaScript', category: 'Programming' })
);
console.log(visualizeEntries({}));
