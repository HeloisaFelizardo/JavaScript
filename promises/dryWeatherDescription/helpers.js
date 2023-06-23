const loader = document.querySelector('#app-loader');

export const startLoader = () => {
	loader.textContent = 'Loading...';
};

export const stopLoader = () => {
	loader.textContent = '';
};
