/* Complete a getTotalSales função de forma que ela retorne o valor total das vendas para o users parâmetro que recebe.
Quando um usuário é inscrito, você obtém um subscription objeto que contém o valor. Caso contrário, o subscription objeto não estará presente. */
/**
 * @param {object[]} users
 * @param {number} users.id
 * @param {string} users.name
 * @param {object} [users.subscription]
 * @param {object} [users.subscription.info]
 * @param {number} [users.subscription.info.value]
 */
const getTotalSales = (users) =>
	users.reduce(
		(acc, curr) => acc + (curr?.subscription?.info?.value ?? 0),
		0
	);

// Sample usage - do not modify
const users = [
	{ id: 1, name: 'Alex' },
	{ id: 2, name: 'Sam', subscription: { info: { value: 59 } } },
	{ id: 3, name: 'Charlie', subscription: { info: { value: 31 } } },
];
console.log(getTotalSales(users)); // 90
