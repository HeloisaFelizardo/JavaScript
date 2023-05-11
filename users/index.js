/* Nomes de registro
Conclua a logNamesfunção de forma que ela registre o nome e o sobrenome do usuário, separados por um caractere de espaço.  */

/**
 * @param {Object[]} users
 * @param {number} users.id
 * @param {string} users.firstName
 * @param {string} users.lastName
 */
const logNames = (users) => {
	users.forEach((user) => {
		console.log(`Logs: "${user.firstName}" and "${user.lastName}}"`);
	});
};

// Sample usage - do not modify
const sampleUsers = [
	{
		id: 1,
		firstName: 'Sam',
		lastName: 'Green',
	},
	{
		id: 2,
		firstName: 'Alex',
		lastName: 'Blue',
	},
];
logNames(sampleUsers); // logs: "Sam Green" and "Alex Blue"
