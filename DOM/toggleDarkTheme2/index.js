const button = document.querySelector('#theme-btn');

button.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');
});
