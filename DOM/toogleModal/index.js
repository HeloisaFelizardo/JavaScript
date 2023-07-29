/* Descrição não guiada
Experimente este projeto usando a descrição não guiada primeiro. Se você estiver preso, confira a descrição guiada abaixo.

O objetivo deste projeto é adicionar atalhos de teclado a este projeto, permitindo que o usuário abra automaticamente o modal quando o caractere né pressionado (em qualquer lugar da página, desde que o modal ainda não esteja aberto).
Além disso, quando o modal já estiver aberto, o usuário deverá poder fechá-lo com a Escapechave.
Há uma toggleModalfunção que é exportada no attendees.jsarquivo.
Descrição guiada
Comece importando a toggleModalfunção.
Você precisa adicionar um keyupevento. Como você precisa executar em qualquer lugar da página, você deve adicioná-lo ao document(caso contrário, os testes não funcionarão).
console.log(event). Como você sabe qual caractere foi pressionado?
Depois de encontrar o caractere que foi pressionado, você precisa verificar se é n. Nesse caso, você deseja chamar a toggleModal()função.
Faça a mesma abordagem para Escape.
Há um problema embora. Se você apertar Escapeenquanto o modal estiver fechado, ele vai abrir. Além disso, se você pressionar ndentro do modal, ele será fechado. Então, você precisa verificar se o modal já está aberto ou não. Você pode fazer isso verificando se ele tem a classe show. */

import { init, toggleModal } from './attendees.js';

// this function adds an event listener on the + button which then opens the modal
init();

// TODO open modal on 'n' when it's closed and close it on 'Escape' when it's open
const modal = document.querySelector('#app-modal');

document.addEventListener('keyup', (event) => {
	const key = event.key;
	if (key === 'n' && !modal.classList.contains('show')) {
		toggleModal();
	}
	if (key === 'Escape' && modal.classList.contains('show')) {
		toggleModal();
	}
});
