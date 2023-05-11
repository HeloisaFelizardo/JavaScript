/*Refatorando condições if
O host está recebendo o user em seu apartamento. Refatore a getStatus função e evite usar condições if.

Observação: para ser consistente com o restante do curso, estamos usando o canceled(com um Lem vez de dois). Ambas as palavras estão corretas, uma delas é o inglês americano e a outra é o inglês britânico. Portanto, certifique-se de escrever canceledem vez de cancelledpassar nos testes.  */

/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
	const messages = {
		pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
		confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
		canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
		done: `${host} hopes you had a great stay.`,
	};

	return messages[booking.status] ?? `Unknown booking status.`;
};

// Sample usage - do not modify
const booking1 = {
	status: 'pending',
};
console.log(getStatus('Sam', 'Alex', booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
const booking2 = {
	status: 'confirmed',
};
console.log(getStatus('Charlie', 'Blake', booking2)); // "Hey Blake, Charlie is excited to be hosting you."
