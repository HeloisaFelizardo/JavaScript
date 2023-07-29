// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	card.addEventListener('click', (event) => {
		// remove the previous active currency
		document.querySelector('.cards .card.active')?.classList.remove('active');
		// mark the new currency as active
		event.currentTarget.classList.add('active');
	});
});
