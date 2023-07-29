// TODO: add 'success' class on #user-name when the user leaves the input and it has at least 6 characters otherwise add the class 'error'
const userName = document.querySelector('#user-name');
const resp = document.querySelector('#resp');

userName.addEventListener('blur', () => {
	if (userName.value.length >= 6) {
		userName.classList.add('success');
		userName.classList.remove('error');
	} else {
		userName.classList.add('error');
		userName.classList.remove('success');
		resp.textContent = `Please, type 6 or more characters.`;
	}
});
