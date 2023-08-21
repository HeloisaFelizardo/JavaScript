/* Visualize promessa rejeitada 

Estamos usando uma fakeFetchfunção dos capítulos anteriores. Leva uma string como parâmetro. Essa busca falsa lida apenas com o "flight-status"for now. No entanto, queremos que você o use para obter o arquivo "user-details".
Isso falhará no momento, pois não está implementado, portanto, certifique-se de lidar com o caso rejeitado.
Para lidar com o caso rejeitado, você precisa registrar o erro usando console.error.
No futuro, assim que implementarmos user-details, o código funcionará automaticamente porque a promessa não será rejeitada.
Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

import { fakeFetch } from './helpers.mjs';

const logUserDetails = async () => {
	// TODO using async/await
	try {
		const result = await fakeFetch('user-details');
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};

// Sample usage (do not modify)
logUserDetails();
