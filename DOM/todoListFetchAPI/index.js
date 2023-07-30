import FetchWrapper from './fetch-wrapper.js';

const form = document.querySelector('#todo-form');
const button = document.querySelector('#button-add');
const title = document.querySelector('#todo-title');
const category = document.querySelector('#todo-category');
const list = document.querySelector('#todos-list');

const API = new FetchWrapper('https://api.learnjavascript.online/demo');

const getTodos = () => {
	API.get('/todos').then((data) => {
		list.innerHTML = '';
		data.todos.forEach((todo) => {
			list.insertAdjacentHTML('beforeend', `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`);
		});
	});
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	button.setAttribute('disabled', 'disabled');
	API.put('/todos', {
		title: title.value,
		category: category.value,
	})
		.then((data) => {
			console.log(data);
			if (!data.error) {
				getTodos();
			}
		})
		.finally(() => {
			button.removeAttribute('disabled');
		});
});

getTodos();
