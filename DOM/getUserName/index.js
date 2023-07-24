/* Get user's name 
Complete a getUserNamefunção de forma que ela retorne o nome do usuário da caixa de texto.
Certifique-se de tentar este desafio na guia do navegador. Escreva um nome na caixa de texto e clique no botão enviar . Você deve ver o nome registrado no console. */

const getUserName = () => {
	return document.querySelector('#user-name').value;
};

// Sample usage - do not modify
document.querySelector('#name-form').addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(getUserName());
});
