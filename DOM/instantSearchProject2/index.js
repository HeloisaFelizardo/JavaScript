/*Projeto de pesquisa instantânea 
Nesse desafio, o usuário preenche a nota do aluno (um número entre 0 e 20) e envia o formulário.
Assim que o usuário enviar o formulário, você deverá enviar a nota para a API.
Escreva o código necessário para enviar a nota para a API quando o formulário for enviado usando a documentação da API abaixo.

Documentação da API
URL base : https://api.learnjavascript.online/demo/ Endpoint : grades.json Método : POST
Corpo : {grade: 15}(substitua 15 pela nota real)

Observe que as solicitações de busca para essas APIs de demonstração são limitadas. Se você solicitar muitas vezes em um curto espaço de tempo, terá que esperar 60 segundos até poder acessá-lo novamente. Isso é para evitar abuso (acidental).

Recomendamos que você use o arquivo exportado FetchWrapperde fetch-wrapper.js.*/

import FetchWrapper from './fetch-wrapper.js';

const grade = document.querySelector('#user-grade');
const form = document.querySelector('#grades-form');

const API = new FetchWrapper('https://api.learnjavascript.online/demo/');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	API.post('grades.json', {
		grade: grade.value,
	}).then((data) => console.log(data));
});
