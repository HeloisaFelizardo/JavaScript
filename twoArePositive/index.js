function twoArePositive(a, b, c) {
	// Happy Coding
	return (a > 0) + (b > 0) + (c > 0) == 2;
}
console.log(twoArePositive(2, 4, -3), true);
console.log(twoArePositive(-4, 6, 8), true);
console.log(twoArePositive(4, -6, 9), true);
console.log(twoArePositive(-4, 6, 0), false);
console.log(twoArePositive(4, 6, 10), false);
console.log(twoArePositive(-14, -3, -4), false);
