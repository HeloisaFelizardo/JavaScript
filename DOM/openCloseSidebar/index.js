import { openCloseSidebar } from './helpers.js';

const menuSidebar = document.querySelector('#menu-sidebar');

menuSidebar.addEventListener('click', () => {
	openCloseSidebar();
});
