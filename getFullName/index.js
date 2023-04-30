/* Complete a função getFullName de forma que retorne o nome completo do usuário (o primeiro nome e o sobrenome separados por um caractere de espaço).
Você tem que usar a desestruturação de array e chamar as variáveis firstName​​e lastName. */

/**
 * @param {string[]} user
 */
const getFullName = (user) => {
	const [firstName, lastName] = user;
	return `${firstName} ${lastName}`;
};

// Sample usage - do not modify
console.log(getFullName(['Sam', 'Blue'])); // "Sam Blue"
console.log(getFullName(['Alex', 'Green'])); // "Alex Green"
