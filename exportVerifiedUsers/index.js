/* Exportar usuários verificados
Conclua a exportVerifiedUsers função de forma que ela retorne uma string CSV dos nomes dos usuários que são verified. */

/**
 * @param {Object[]} users
 * @param {string} users.name
 * @param {boolean} users.isVerified
 */
const exportVerifiedUsers = (users) => {
	const verified = users.filter((user) => user.isVerified);
	return verified.map((name) => name.name).join(', ');
};

// Sample usage - do not modify
const sampleUsers = [
	{
		name: 'Sam',
		isVerified: true,
	},
	{
		name: 'Alex',
		isVerified: false,
	},
	{
		name: 'Charlie',
		isVerified: true,
	},
];
console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"
