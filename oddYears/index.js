/**
 * Complete a função getOddYearsde forma que retorne todos os anos ímpares do parâmetro yearsque recebe.
PS: Sabemos que 2020 foi um ano "ímpar" mas o número 2020 é par ;
 * @param {number[]} years
 */
function getOddYears(years) {
	return years.filter((year) => {
		if (year % 2 === 1) {
			return year;
		}
	});
}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
