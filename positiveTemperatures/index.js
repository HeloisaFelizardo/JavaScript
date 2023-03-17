/**
 * Complete a função getPositiveTemperaturesde forma que ela retorne um array contendo as temperaturas positivas (as temperaturas que estão acima de 0).
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {
	return temperatures.filter((temperature) => {
		return temperature > 0;
	});
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
