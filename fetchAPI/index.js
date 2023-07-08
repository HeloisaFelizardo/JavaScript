fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((data) => {
		console.log(data); // visualize it then realize it's an array of objects
		data.forEach((user) => {
			// console.log(user); // visualize the item of the array
			console.log(user.email); // log the email ☑️
		});
	});
