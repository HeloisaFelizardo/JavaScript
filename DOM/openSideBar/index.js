import { openSidebar } from './helpers.js';

const menuSidebar = document.querySelector('#menu-sidebar');

menuSidebar.addEventListener('click', () => {
	openSidebar();
});
