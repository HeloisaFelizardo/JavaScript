const button = document.querySelector('#remove-title');
button.addEventListener('click', () => {
	try {
		document.querySelector('h1').remove();
	} catch (error) {
		console.error(error);
	}
});
