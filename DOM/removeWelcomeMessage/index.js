const removeWelcomeMessage = () => {
	document.querySelector('#welcome-message')?.remove();
};

// Sample usage - do not modify
const removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', () => {
	try {
		removeWelcomeMessage();
	} catch (error) {
		console.log(error);
	}
});
