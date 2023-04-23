/* Este é o projeto de sala de aula, mas você deve usar funções de seta (opcional: retorno implícito)! Você pode inserir notas na guia do navegador e adicioná-las ao aplicativo, que mostrará várias estatísticas sobre a sala de aula. Por exemplo, você verá a nota média, todas as notas reprovadas, etc.

Cada função possui um comentário descrevendo o que ela deve retornar, mas você também pode encontrá-los abaixo:

getNumberOfGradesdeve retornar o número de notas.
getSumGradesdeve retornar a soma de todas as notas.
getAverageValuedeve retornar o valor médio de todas as notas (soma de todas as notas dividida pelo número total de notas).
getPassingGradesdeve retornar todas as notas de aprovação (10 e acima).
getFailingGradesdeve retornar todas as notas de reprovação (9 e abaixo).
getRaisedGradesdeve retornar todas as notas aumentadas em 1 (as notas não devem exceder 20). */

/** @param {number[]} grades */
export const getNumberOfGrades = (grades) => grades.length;

/** @param {number[]} grades */
export const getSumGrades = (grades) => {
	let sum = 0;
	grades.forEach((grade) => (sum += grade));
	return sum;
};

/** @param {number[]} grades */
export const getAverageValue = (grades) => getSumGrades(grades) / grades.length;

/** @param {number[]} grades */
export const getPassingGrades = (grades) =>
	grades.filter((grade) => grade >= 10);

/** @param {number[]} grades */
export const getFailingGrades = (grades) =>
	grades.filter((grade) => grade <= 9);

/** @param {number[]} grades */
export const getRaisedGrades = (grades) =>
	grades.map((grade) => (grade + 1 > 20 ? 20 : grade + 1));
