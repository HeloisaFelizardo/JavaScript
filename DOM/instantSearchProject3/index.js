/*Nesse desafio, o usuário pode atualizar seu nome e sobrenome enviando o formulário.
Depois que o formulário for enviado, você deverá enviar o novo nome e sobrenome para a API.
O formulário é pré-preenchido com Same Green. No entanto, o usuário pode atualizar esses valores.
Escreva o código necessário para enviar o novo nome e sobrenome fornecidos pelo usuário para a API quando ele enviar o formulário.

Documentação da API
URL Base : https://api.learnjavascript.online/demo/
Endpoint : user.json
Método : PUT
Corpo : {firstName: "Sam", lastName: "Green"}(substitua pelos valores do formulário)

Observe que as solicitações de busca para essas APIs de demonstração são limitadas. Se você solicitar muitas vezes em um curto espaço de tempo, terá que esperar 60 segundos até poder acessá-lo novamente. Isso é para evitar abuso (acidental).

Recomendamos que você use o arquivo exportado FetchWrapperde fetch-wrapper.js.*/

import FetchWrapper from './fetch-wrapper.js';

const API = new FetchWrapper('https://api.learnjavascript.online/demo/');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const form = document.querySelector('#user-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	API.put('user.json', {
		firstName: firstName.value,
		lastName: lastName.value,
	}).then((data) => console.log(data));
});
