/* Um usuário está verificando seu e-mail em seu site. Temos uma matriz de usuários e o id do usuário que está verificando seu e-mail. Defina o isVerifiedcampo truepara esse usuário.
Observe como o array original sofre mutação! */

/**
 * @param {array} users
 * @param {number} userId
 */
const verifyUser = (users, userId) => {
	const user = users.find((user) => user.id === userId);
	user.isVerified = true;
};

// Sample usage - do not modify
const users = [
	{
		id: 1,
		name: 'Sam',
		isVerified: false,
	},
	{
		id: 2,
		name: 'Alex',
		isVerified: false,
	},
	{
		id: 3,
		name: 'Charlie',
		isVerified: false,
	},
];
verifyUser(users, 2);
console.log(users); // notice that it gets mutated
