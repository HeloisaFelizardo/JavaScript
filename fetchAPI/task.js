fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((data) => {
		console.log(data); // visualize it then realize that it's an object
		console.log(data.title);
	});
