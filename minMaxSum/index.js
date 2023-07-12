function miniMaxSum(arr) {
	arr.sort((a, b) => a - b);
	const sumMin = arr.slice(0, 4).reduce((a, b) => a + b, 0);
	const sumMax = arr.slice(1, 5).reduce((a, b) => a + b, 0);

	console.log(`${sumMin} ${sumMax}`);
}

const arr = [1, 7, 5, 3, 9];

console.log(miniMaxSum(arr));
