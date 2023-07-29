// TODO: toggle the class active on any of the buttons whenever they get clicked
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.currentTarget.classList.toggle('active');
	});
});
