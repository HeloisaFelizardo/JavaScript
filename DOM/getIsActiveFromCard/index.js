const getIsActiveFromCard = () => {
	const element = document.querySelector('#user-card');
	return element.dataset.isActive === 'true';
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());
