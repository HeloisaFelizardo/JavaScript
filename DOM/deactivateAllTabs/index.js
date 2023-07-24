import { deactivateAllTabs, activateClickedTab } from './tabs.js';

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		event.preventDefault();
		const clickedTab = event.currentTarget;
		deactivateAllTabs();
		activateClickedTab(clickedTab);
	});
});
