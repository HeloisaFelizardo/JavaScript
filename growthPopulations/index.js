/* Em uma pequena cidade a população está p0 = 1000no início de um ano. A população aumenta regularmente por 2 percentano e, além disso, 50novos habitantes por ano vêm morar na cidade. Quantos anos a cidade precisa para ver sua população maior ou igual a p = 1200habitantes?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
Parâmetros mais gerais:

p0, percent, aug (inhabitants coming or leaving each year), p (população igual ou superior)

a função nb_yeardeve retornar no número de anos inteiros necessários para obter uma população maior ou igual a p.

aug é um inteiro, percent um número flutuante positivo ou nulo, p0 e p são inteiros positivos (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Observação:
Não se esqueça de converter o parâmetro percent como uma porcentagem no corpo da sua função: se o parâmetro percent for 2, você deve convertê-lo para 0,02.

 */

function nbYear(p0, percent, aug, p) {
	for (var years = 0; p0 < p; years++) {
		p0 = Math.floor(p0 + (p0 * (percent / 100) + aug));
	}
	return years;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1070, 0.02, 50, 1213), 3);
