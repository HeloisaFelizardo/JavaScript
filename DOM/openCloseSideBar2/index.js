const menuSidebar = document.querySelector('#menu-sidebar');
const appSidebar = document.querySelector('#app-sidebar');

menuSidebar.addEventListener('click', () => {
	appSidebar.classList.toggle('show');
});
