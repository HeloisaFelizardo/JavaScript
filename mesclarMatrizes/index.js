/*SINTAXE DE PROPAGAÇÃO
Complete a função getApps de forma que ela retorne um novo array contendo os itens de ambos os parâmetros que recebe. */
/**
 * @param {string[]} apps1
 * @param {string[]} apps2
 */
const getApps = (apps1, apps2) => {
	return [...apps1, ...apps2];
};

// Sample usage - do not modify
console.log(getApps(['Calculator', 'Whatsapp'], ['Chrome', 'Firefox'])); // ["Calculator", "Whatsapp", "Chrome", "Firefox"]
