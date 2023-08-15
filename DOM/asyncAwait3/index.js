/* Conclua a getTweetDetailsfunção de forma que ela busque o seguinte endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json e então chame a showAuthorNamefunção com o nome completo do autor do tweet (o nome deve conter um caractere de espaço entre o primeiro nome e o sobrenome).
Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

const getTweetDetails = async () => {
	// TODO using async/await
	const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json');
	const data = await response.json();
	console.log(data); // visualize data
	console.log(data.author); // visualize data.author
	console.log(data.author.details); // visualize data.author.details
	const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
	showAuthorName(fullName);
};

// do NOT modify this function
function showAuthorName(fullName) {
	console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();
