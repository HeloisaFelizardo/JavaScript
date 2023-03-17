/**
 * Complete a função getYearde forma que ela retorne o searchYear(passado como 2º parâmetro) quando for encontrado no array. Caso contrário, deve retornar undefined.

Dê uma olhada no uso de exemplo e na saída esperada para entender melhor como a função deve funcionar.
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
	return years.find((year) => {
		return year === searchYear;
	});
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
