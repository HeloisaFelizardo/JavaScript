const toggleDarkTheme = () => {
	document.documentElement.classList.toggle('dark');
};

// Sample usage - do not modify
const button = document.querySelector('#theme-btn');
button.addEventListener('click', () => toggleDarkTheme());
