export const waitForCompleteClick = () => {
	return new Promise((resolve) => {
		document
			.querySelector('#complete-btn')
			.addEventListener('click', () => {
				resolve();
			});
	});
};

/**
 * @param {number} milliseconds
 */
export const wait = (milliseconds) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, milliseconds);
	});
};
