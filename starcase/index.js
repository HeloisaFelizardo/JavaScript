function staircase(n) {
	for (let i = 1; i <= n; i++) {
		const spaces = ' '.repeat(n - i);
		const symbols = '#'.repeat(i);
		console.log(spaces + symbols);
	}
}

console.log(staircase(6));
