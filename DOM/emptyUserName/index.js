const emptyUserName = () => {
	document.querySelector('#user-name').value = '';
};

// Sample usage - do not modify
document.querySelector('#empty-btn').addEventListener('click', () => {
	emptyUserName();
});
