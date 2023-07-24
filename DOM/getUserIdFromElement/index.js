/**
 * @param {HTMLElement} element
 */
const getUserIdFromElement = (element) => {
	const card = element.closest('.user-card');
	return Number(card.dataset.userId);
};

// Sample usage - do not modify
console.log(getUserIdFromElement(document.querySelector('#name'))); // 23
console.log(getUserIdFromElement(document.querySelector('#description'))); // 23
