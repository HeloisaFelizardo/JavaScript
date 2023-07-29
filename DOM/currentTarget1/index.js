// TODO: toggle the class active on my-button when it's clicked
const button = document.querySelector('#my-button');

button.addEventListener('click', (event) => {
	event.currentTarget.classList.toggle('active');
});
