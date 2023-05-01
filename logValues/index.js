/* Conclua a função logValues de forma que ela registre (usando console.log) todos os valores no courseobjeto que recebe como parâmetro.

Por exemplo, logValues({id: 3, course: "React Tutorial"}) deve registrar 3e "React Tutorial"para o console. */
/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const logValues = (course) =>
	Object.keys(course).forEach((value) => console.log(course[value]));

// Sample usage - do not modify
logValues({ id: 1, name: 'Learn JavaScript', year: 2021 }); // should log (separately): 1, "Learn JavaScript" and 2021
