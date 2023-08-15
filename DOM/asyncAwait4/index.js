/* Nesse desafio, o usuário preenche a nota do aluno (um número entre 0 e 20) e envia o formulário.
Assim que o usuário clicar no botão Salvar, você deverá enviar a nota para a API.
Conclua a saveGradefunção usando a documentação da API abaixo.

Documentação da API
URL base : https://api.learnjavascript.online/demo/ Endpoint : grades.json Método : POST
Corpo : {grade: 15}(substitua 15 pela nota real)

Observe que as solicitações de busca para essas APIs de demonstração são limitadas. Se você solicitar muitas vezes em um curto espaço de tempo, terá que esperar 60 segundos até poder acessá-lo novamente. Isso é para evitar abuso (acidental).

Você deve usar async/await, no entanto, isso não é aplicado nos testes. */

const saveGrade = async (grade) => {
	// TODO using async/await
	const url = 'https://api.learnjavascript.online/demo/';
	const endpoint = 'grades.json';

	const response = await fetch(`${url}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify({
			grade: grade,
		}),
	});
	const data = await response.json();
	console.log(data);
};

// Sample usage - do not modify
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	saveGrade(userGrade.value);
});
