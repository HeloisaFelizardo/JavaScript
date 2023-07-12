function birthdayCakeCandles(candles) {
	const maxCandleHeight = Math.max(...candles);
	let count = 0;

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] === maxCandleHeight) {
			count++;
		}
	}

	return count;
}

// Exemplo de uso
const candles = [3, 2, 1, 3];
const numMaxCandles = birthdayCakeCandles(candles);
console.log(numMaxCandles);
// Saída: 2
