const getUserIdFromCard = () => {
	const element = document.querySelector('#user-card');
	return Number(element.dataset.userId);
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
