export const waitForCompleteClick = () => {
	return new Promise((resolve, reject) => {
		document.querySelector('#complete-btn').addEventListener('click', () => {
			resolve();
		});
		document.querySelector('#fail-btn').addEventListener('click', () => {
			reject();
		});
	});
};
