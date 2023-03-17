/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
	console.log(ages);
	const filteredVoters = ages.filter(function (age) {
		return age >= 18;
	});
	return filteredVoters.length;
}
