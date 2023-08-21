/* O objetivo deste desafio é implementar a FetchWrapperclasse e seu get(endpoint)método de instância usando async/await. Usaremos esse novo wrapper no próximo desafio.

Comece observando o uso de amostra.
Em seguida, defina a classe FetchWrapper.
Defina o constructor(). Ele deve armazenar uma variável de instância chamada baseURL(isso diferencia maiúsculas de minúsculas) que captura o primeiro argumento que recebe.
Comece a implementar o get(endpoint)método de instância. Pergunte a si mesmo o que essa função deve retornar e o que ela deve fazer. Mais detalhes disponíveis nas dicas.
Você deve usar async/await, no entanto, isso não é aplicado nos testes. */
// TODO: implement FetchWrapper with async/await
class FetchWrapper {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}
	async get(endpoint) {
		const response = await fetch(this.baseURL + endpoint);
		return response.json();
	}
}

// Sample usage - do not modify
/* normally, we don't use try/catch with fetch.
 * This is only for this challenge to allow you to
 * work on the tests one by one. */
try {
	const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

	API.get('/notifications/new.json').then((data) => {
		console.log(data);
	});
} catch (error) {}
