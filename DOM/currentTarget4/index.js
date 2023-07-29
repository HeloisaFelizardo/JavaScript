// TODO: implement tabs
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		// remove highlight from previous active tab
		document.querySelector('.tab.active').classList.remove('active');
		// highlight current tab
		event.currentTarget.classList.add('active');

		// hide the previously visible tab content
		document.querySelector('.tab-content.show').classList.remove('show');

		// get the selector from data-content
		const selector = event.currentTarget.dataset.content;
		// find the related content and show it
		document.querySelector(selector).classList.add('show');
	});
});
